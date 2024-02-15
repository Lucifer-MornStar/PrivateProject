import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}
