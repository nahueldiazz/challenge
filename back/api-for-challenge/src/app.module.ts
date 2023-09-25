import { Module } from '@nestjs/common';
import { ItemsModule } from './Items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
