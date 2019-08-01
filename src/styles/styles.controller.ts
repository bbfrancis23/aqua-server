import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateStyleDto } from './dto/create-style.dto'
import { StylesService } from './styles.service'
import { Style } from './interfaces/style.interface'

@Controller('api/styles')
export class StylesController {
  constructor(private readonly stylesService: StylesService) {}

  @Post()
  async create(@Body() createStyleDto: CreateStyleDto) {
    await this.stylesService.create(createStyleDto)
  }

  @Get()
  async findAll(): Promise<Style[]> {
    return this.stylesService.findAll()
  }
}
