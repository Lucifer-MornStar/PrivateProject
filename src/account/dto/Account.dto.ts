import { IsBoolean } from 'class-validator';

export class AccountDto {
  id: number;
  ownerId: number;
  isBlockingEnabled: boolean;
}
