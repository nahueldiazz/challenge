import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly appService: ItemsService) {}

  @Get()
  getSearch(@Query('q') q: string) {
    return this.appService.getSearch(q);
  }

  @Get('/:id')
  getItemById(@Param('id') id: string) {
    return this.appService.getItemById(id);
  }
}
