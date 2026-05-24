import { AngularAppEngine } from '@angular/ssr';
import compression from 'compression';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export function app(): express.Express {
  const server = express();
  server.use(compression());
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const angularApp = new AngularAppEngine();
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));
server.get('**', (req, res, next) => {
    angularApp
      .handle(req as unknown as Request)
      .then((response: Response | null) => {
        if (response) {
          response.text().then((html: string) => res.send(html));
        } else {
          next();
        }
      })
      .catch((err: Error) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
