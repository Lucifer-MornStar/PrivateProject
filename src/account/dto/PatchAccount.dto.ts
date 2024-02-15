import { IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PatchAccountDto {
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  isBlockingEnabled?: boolean;
}
