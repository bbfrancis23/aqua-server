import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Style } from './interfaces/style.interface'
import { CreateStyleDto } from './dto/create-style.dto'

@Injectable()
export class StylesService {
  constructor(@InjectModel('Style') private readonly styleModel: Model<Style>) {}

  async create(createStyleDto: CreateStyleDto): Promise<Style> {

    const createdStyle = new this.styleModel(createStyleDto)
    return await createdStyle.save()
  }

  async findAll(): Promise<Style[]> {
    return await this.styleModel.find().exec()
  }
}
