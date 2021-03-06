import {MiddlewareConsumer, Module} from '@nestjs/common'
import { FrontendMiddleware } from './frontend.middleware'
import { MongooseModule } from '@nestjs/mongoose'

import { CatsModule } from './cats/cats.module'
import { ThemesModule} from './themes/themes.module'
import { StylesModule} from './styles/styles.module'
import { ConfigsModule} from './config/configs.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/aquaAppDB'),
    CatsModule, ThemesModule, StylesModule, ConfigsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes('')
  }
}
