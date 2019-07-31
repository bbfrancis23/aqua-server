import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Theme } from './interfaces/theme.interface';
import { CreateThemeDto } from './dto/create-theme.dto';

@Injectable()
export class ThemesService {
  constructor(@InjectModel('Theme') private readonly themeModel: Model<Theme>) {}

  async create(createThemeDto: CreateThemeDto): Promise<Theme> {


    const createdTheme = new this.themeModel(createThemeDto);
    return await createdTheme.save();

    // comment
  }

  async findAll(): Promise<Theme[]> {

    return await this.themeModel.find().exec();
  }
}
