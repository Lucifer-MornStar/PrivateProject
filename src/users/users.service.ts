import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

type CreateUser = {
  email: string;
  hash: string;
  salt: string;
};

@Injectable()
export class UsersService {
  constructor(private dbService: DbService) {}
  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  createUser({ email, hash, salt }: CreateUser) {
    return this.dbService.user.create({ data: { email, hash, salt } });
  }
}
