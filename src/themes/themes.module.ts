import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';
import { ThemeSchema } from './schemas/theme.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Theme', schema: ThemeSchema }])],
  controllers: [ThemesController],
  providers: [ThemesService],
})
export class ThemesModule {}
