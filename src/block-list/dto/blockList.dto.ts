import { BlockItemDto } from './blockItem.dto';
import { ApiProperty } from '@nestjs/swagger';

export class BlockListDto {
  id: number;
  ownerId: number;
  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[];
}
