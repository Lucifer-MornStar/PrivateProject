import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AccountService } from '../account/account.service';

type CreateUser = {
  email: string;
  hash: string;
  salt: string;
};

@Injectable()
export class UsersService {
  constructor(
    private dbService: DbService,
    private accountService: AccountService,
  ) {}
  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  async createUser({ email, hash, salt }: CreateUser) {
    const user = await this.dbService.user.create({
      data: { email, hash, salt },
    });
    await this.accountService.create(user.id);

    return user;
  }
}
