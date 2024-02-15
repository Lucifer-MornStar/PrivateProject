import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AccountService } from '../account/account.service';
import { BlockListService } from '../block-list/block-list.service';

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
    private blockListService: BlockListService,
  ) {}
  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  async createUser({ email, hash, salt }: CreateUser) {
    const user = await this.dbService.user.create({
      data: { email, hash, salt },
    });
    await this.accountService.create(user.id);
    await this.blockListService.create(user.id);

    return user;
  }
}
