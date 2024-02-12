import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class GetSessionInfoDto {
  @ApiProperty({
    example: 1234,
  })
  id: number;
  @ApiProperty({
    example: 'example@gmail.com',
  })
  @IsEmail()
  email: string;

  iat: number;
  exp: number;
}
