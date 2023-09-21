import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSearch(@Query('q') q: string) {
    return this.appService.getSearch(q);
  }

  @Get('/:id')
  getItemById(@Param('id') id: string) {
    return this.appService.getItemById(id);
  }
}
