import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { generateCvPdfs } from './cv-pdf.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const server = await createServer({
  root,
  base: '/',
  server: { host: '127.0.0.1', port: 0, open: false },
  logLevel: 'error',
});
try {
  await server.listen();
  const address = server.httpServer.address();
  if (!address || typeof address === 'string') throw new Error('Serveur de rendu indisponible.');
  const result = await generateCvPdfs({
    url: `http://127.0.0.1:${address.port}/cv`,
    outputDir: path.join(root, 'public'),
    diagnosticsDir: process.env.CV_PDF_DIAGNOSTICS_DIR,
  });
  console.log(`CV exporté : A4 à ${(result.a4Scale * 100).toFixed(1)} % et format web ${result.width} × ${result.height} px.`);
} finally {
  await server.close();
}
