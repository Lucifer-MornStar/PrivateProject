import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from 'crypto';

@Injectable()
export class PasswordService {
  getSalt() {
    return randomBytes(16).toString('hex');
  }

  getHash(pwd: string, salt: string) {
    return pbkdf2Sync(pwd, salt, 1000, 64, 'sha512').toString('hex');
  }
}
