import { $Enums } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BlockItemDto {
  id: number;
  blockListId: number;
  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  type: $Enums.BlockItemType;

  data: string;

  createdAt: Date;
}
