import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigsController } from './configs.controller'
import { ConfigsService } from './configs.service'
import { ConfigSchema } from './schemas/config.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Config', schema: ConfigSchema }])],
  controllers: [ConfigsController],
  providers: [ConfigsService],
})
export class ConfigsModule {}
