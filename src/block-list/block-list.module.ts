import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';

@Module({
  providers: [BlockListService],
  controllers: [BlockListController]
})
export class BlockListModule {}
