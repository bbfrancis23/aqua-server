import {MiddlewareConsumer, Module} from '@nestjs/common';
import { FrontendMiddleware } from './frontend.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes('');
  }
}
