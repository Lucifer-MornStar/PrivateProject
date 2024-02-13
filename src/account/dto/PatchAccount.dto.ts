import { IsBoolean, IsOptional } from 'class-validator';

export class PatchAccountDto {
  @IsOptional()
  isBlockingEnabled?: boolean;
}
