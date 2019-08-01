import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateThemeDto } from './dto/create-theme.dto'
import { ThemesService } from './themes.service'
import { Theme } from './interfaces/theme.interface'

@Controller('api/themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Post()
  async create(@Body() createThemeDto: CreateThemeDto) {
    await this.themesService.create(createThemeDto)
  }

  @Get()
  async findAll(): Promise<Theme[]> {
    return this.themesService.findAll()
  }
}
