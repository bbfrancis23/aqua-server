import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = 3000

  await app.listen(port)

  // Hot swapping changed code
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
