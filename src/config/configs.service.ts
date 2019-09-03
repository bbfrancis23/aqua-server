import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Config } from './interfaces/config.interface'

@Injectable()
export class ConfigsService {
  constructor(@InjectModel('Config') private readonly configModel: Model<Config>) {}

  // async create(createThemeDto: CreateThemeDto): Promise<Theme> {
  //   const createdTheme = new this.themeModel(createThemeDto)
  //   return await createdTheme.save()
  // }

  // async findAll(): Promise<Theme[]> {
  //
  //   return await this.themeModel.find().exec();
  // }

  async find(id: string): Promise<Config[]> {
    return await this.configModel.findById(id).exec()
  }

  // async update(id: string, articleDto: ConfigDto): Promise<Config> {
  //  return await this.configModel.findByIdAndUpdate(id, articleDto)
  // }
}
