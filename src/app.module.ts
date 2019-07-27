import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { FrontendMiddleware } from './frontend.middleware';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes('');
  }
}
