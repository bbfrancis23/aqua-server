import {Controller, Get, Res} from '@nestjs/common';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  root(@Res() response): void {


    // tslint:disable-next-line:no-console
    //console.log(path.resolve('resume/index.html'));
    // the homepage will load our index.html which contains angular logic
    //response.sendFile(path.resolve('resume/index.html'));
  }
}
