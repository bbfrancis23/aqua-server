import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {

    createCatDto = { name: 'Sam', age: 1, breed: 'calico'}
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();

    // comment
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
