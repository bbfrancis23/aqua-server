import {MiddlewareConsumer, Module} from '@nestjs/common';
import { FrontendMiddleware } from './frontend.middleware';
import { MongooseModule } from '@nestjs/mongoose';


import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/aquaAppDB'),
    CatsModule
  ],
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
