import {  Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

const resolvePath = (file: string) => path.resolve(`../dist/resume/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {

    const { url } = req;
    if (url.indexOf('api') === 1) {
      // it starts with /api --> continue with execution
      console.log('go to api');
      next();
    } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
      res.sendFile(resolvePath(url));
    } else {
      res.sendFile(resolvePath('index.html'));
    }
  }
}
