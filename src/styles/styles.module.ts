import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { StylesController } from './styles.controller';
import { StylesService } from './styles.service';
import { StyleSchema } from './schemas/style.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Style', schema: StyleSchema }])],
  controllers: [StylesController],
  providers: [StylesService],
})
export class StylesModule {}
