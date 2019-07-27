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

const resolvePath = (file: string) => path.resolve(`../dist/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  // tslint:disable-next-line:ban-types
  use(req: Request, res: Response, next: Function) {

    const { url } = req;



    console.log(resolvePath(url));
    /// comments  asdfasdf

    if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {

      res.sendFile(resolvePath(url));
      //next();
    } else {

      console.log('sending to index', resolvePath('index.html'));
      res.sendFile(resolvePath('index.html'));
      // next();
    }

    // next();
  }
}
