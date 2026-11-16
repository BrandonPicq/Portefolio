import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { chromium } from 'playwright';

// Exercise the public download link, including the dev PDF middleware.
const server = await createServer({ base: '/', server: { host: '127.0.0.1', port: 0 }, logLevel: 'error' });
let browser;
try {
  await server.listen();
  const address = server.httpServer.address();
  assert(address && typeof address !== 'string');
  const origin = `http://127.0.0.1:${address.port}`;
  browser = await chromium.launch(process.env.PLAYWRIGHT_CHANNEL
    ? { channel: process.env.PLAYWRIGHT_CHANNEL }
    : existsSync(chromium.executablePath()) ? {} : { channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await mkdir('tmp/pdfs/cv-ats-check', { recursive: true });
  await page.goto(`${origin}/cv`);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('.cv-actions-bar a').count(), 3);
  assert.equal(await page.getByRole('heading', { name: 'Expériences Professionnelles', exact: true }).count(), 1);
  await page.screenshot({ path: 'tmp/pdfs/cv-ats-check/desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.screenshot({ path: 'tmp/pdfs/cv-ats-check/mobile.png' });
  const downloadPromise = page.waitForEvent('download', { timeout: 60000 });
  await page.getByRole('link', { name: 'Télécharger le PDF ATS', exact: true }).click();
  const download = await downloadPromise;
  assert.equal(await download.failure(), null);
  assert.equal(download.suggestedFilename(), 'CV_Brandon_Picq_Developpeur_Web_Full_Stack_ATS.pdf');
  const pdf = await readFile(await download.path());
  assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
  await page.goto(`${origin}/cv?format=ats`);
  assert.deepEqual(await page.locator('.cv-ats h2').allTextContents(), [
    'Profil', 'Compétences techniques', 'Expériences professionnelles', 'Projets réalisés',
    'Formations', 'Certifications et langues', 'Engagement associatif',
  ]);
  assert.equal(await page.locator('.cv-ats img').count(), 0);
  assert.deepEqual(errors, []);
  console.log('CV: 3 liens, titres, mobile sans débordement, téléchargement ATS et ordre de lecture vérifiés.');
} finally {
  await browser?.close();
  await server.close();
}
