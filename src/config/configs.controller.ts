import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
// import { CreateThemeDto } from './dto/create-theme.dto'
import { ConfigsService } from './configs.service'
import { Config } from './interfaces/config.interface'

@Controller('api/configs')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) {}

  @Get(':id')
  async find(@Param('id') id: string) {
    // tslint:disable-next-line:no-console
    console.log(id)
    return this.configsService.find(id)
  }

  // @Post()
  // async create(@Body() createThemeDto: CreateThemeDto) {
  //   await this.themesService.create(createThemeDto)
  // }
  //
  // @Get()
  // async findAll(): Promise<Theme[]> {
  //   return this.themesService.findAll()
  // }
}
