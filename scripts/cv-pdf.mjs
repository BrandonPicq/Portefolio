import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

export const CV_PDF_FILES = {
  a4: 'CV_Brandon_Picq_Developpeur_Web_Full_Stack.pdf',
  web: 'CV_Brandon_Picq_Developpeur_Web_Full_Stack_Web.pdf',
};

// CI uses Playwright's browser; an existing local Chrome installation also works.
function browserOptions() {
  if (process.env.PLAYWRIGHT_CHANNEL) return { channel: process.env.PLAYWRIGHT_CHANNEL };
  if (existsSync(chromium.executablePath())) return {};
  return { channel: 'chrome' };
}

export async function generateCvPdfs({ url, outputDir, diagnosticsDir }) {
  const browser = await chromium.launch(browserOptions());
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    const origin = new URL(url).origin;
    // The CV and its fonts are local. No external service receives its contents.
    await page.route('**/*', route => {
      const target = new URL(route.request().url());
      return target.origin === origin || target.protocol === 'data:'
        ? route.continue()
        : route.abort();
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(url, { waitUntil: 'load' });
    if (!response?.ok()) throw new Error(`Page CV indisponible : ${url}`);
    const sheet = page.locator('.cv-sheet');
    await sheet.waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    const fontLoaded = await page.evaluate(() =>
      [...document.fonts].some(font => font.family.replaceAll('"', '') === 'Folio Archivo' && font.status === 'loaded'));
    if (!fontLoaded) throw new Error('La police Archivo du CV ne s’est pas chargée.');
    if (errors.length) throw new Error(errors.join('\n'));

    const before = await sheet.boundingBox();
    if (!before) throw new Error('La feuille de CV est introuvable.');
    const text = await sheet.innerText();
    if (diagnosticsDir) {
      await mkdir(diagnosticsDir, { recursive: true });
      await sheet.screenshot({ path: path.join(diagnosticsDir, 'preview.png') });
      await writeFile(path.join(diagnosticsDir, 'preview.txt'), text);
    }
    await page.evaluate(width => {
      document.documentElement.style.setProperty('--cv-export-width', `${width}px`);
      document.title = 'CV Brandon Picq - Développeur Web Full Stack';
    }, before.width);
    await page.emulateMedia({ media: 'print' });
    // Switching media can initiate a new font load for print-specific text styles.
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const after = await sheet.boundingBox();
    // Print CSS isolates the sheet, without compacting or reflowing its contents.
    if (!after || Math.abs(before.width - after.width) > 1 || Math.abs(before.height - after.height) > 1) {
      throw new Error(`La mise en page d’impression diffère de la preview (${before.width} × ${before.height} → ${after?.width} × ${after?.height}).`);
    }
    const width = Math.ceil(before.width);
    const height = Math.ceil(before.height);
    const pxPerMm = 96 / 25.4;
    const a4Scale = Math.min(210 * pxPerMm / width, 297 * pxPerMm / height, 1);
    if (a4Scale < 0.1) throw new Error('Le CV est trop long pour une seule page A4.');
    const pdfOptions = {
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      tagged: true,
    };
    // Chromium's first print can use fallback glyphs for a variable webfont even
    // after document.fonts.ready. Prime the print compositor before either export.
    await page.pdf({ ...pdfOptions, width: `${width}px`, height: `${height}px` });
    const web = await page.pdf({ ...pdfOptions, width: `${width}px`, height: `${height}px`, scale: 1 });
    const a4 = await page.pdf({ ...pdfOptions, format: 'A4', scale: a4Scale });
    await mkdir(outputDir, { recursive: true });
    // Both renders must succeed before replacing either downloadable file.
    await writeFile(path.join(outputDir, CV_PDF_FILES.web), web);
    await writeFile(path.join(outputDir, CV_PDF_FILES.a4), a4);
    const result = { width, height, a4Scale, characters: text.length, files: CV_PDF_FILES };
    if (diagnosticsDir) await writeFile(path.join(diagnosticsDir, 'layout.json'), JSON.stringify(result, null, 2));
    return result;
  } finally {
    await browser.close();
  }
}
