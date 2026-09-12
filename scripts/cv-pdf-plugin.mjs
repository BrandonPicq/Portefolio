import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { CV_PDF_FILES, generateCvPdfs } from "./cv-pdf.mjs";

function localCvUrl(server, basePath) {
  const address = server.httpServer?.address();

  if (!address || typeof address === "string") {
    throw new Error("Le serveur Vite doit écouter sur un port local pour exporter le CV.");
  }

  const hostname = address.address === "0.0.0.0"
    ? "127.0.0.1"
    : address.address === "::" ? "::1" : address.address;
  const authority = hostname.includes(":") ? `[${hostname}]` : hostname;
  const protocol = server.config.server.https ? "https" : "http";

  return `${protocol}://${authority}:${address.port}${basePath}cv`;
}

export default function cvPdfPlugin() {
  return {
    name: "portfolio-cv-pdf",
    apply: "serve",
    configureServer(server) {
      const basePath = new URL(server.config.base, "http://localhost").pathname;
      const routes = new Map(
        Object.values(CV_PDF_FILES).map((filename) => [`${basePath}${filename}`, filename]),
      );
      let queue = Promise.resolve();

      async function exportPdf(filename) {
        const outputDir = await mkdtemp(path.join(tmpdir(), "portfolio-cv-pdf-"));

        try {
          await generateCvPdfs({ url: localCvUrl(server, basePath), outputDir });
          return await readFile(path.join(outputDir, filename));
        } finally {
          await rm(outputDir, { recursive: true, force: true });
        }
      }

      server.middlewares.use((request, response, next) => {
        const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
        const filename = routes.get(pathname);

        if (!filename) {
          next();
          return;
        }

        response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "0");

        if (request.method !== "GET" && request.method !== "HEAD") {
          response.statusCode = 405;
          response.setHeader("Allow", "GET, HEAD");
          response.end();
          return;
        }

        // Each request receives a fresh render; a rejected export must not block the queue.
        const pending = queue.then(() => exportPdf(filename));
        queue = pending.then(() => undefined, () => undefined);

        void pending.then((pdf) => {
          if (response.destroyed) return;
          response.setHeader("Content-Type", "application/pdf");
          response.setHeader("Content-Disposition", `inline; filename="${filename}"`);
          response.setHeader("Content-Length", pdf.byteLength);
          response.end(request.method === "HEAD" ? undefined : pdf);
        }).catch((error) => {
          server.config.logger.error(`[CV PDF] ${error instanceof Error ? error.message : String(error)}`);
          if (response.destroyed) return;
          response.statusCode = 500;
          response.setHeader("Content-Type", "text/plain; charset=utf-8");
          response.end(request.method === "HEAD" ? undefined : "La génération du CV a échoué. Réessayez après avoir vérifié le serveur local.");
        });
      });
    },
  };
}
