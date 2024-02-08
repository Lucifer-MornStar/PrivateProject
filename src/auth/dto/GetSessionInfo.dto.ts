import { ApiProperty } from '@nestjs/swagger';

export class GetSessionInfoDto {
  @ApiProperty({
    example: 1234,
  })
  id: number;
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;
}
