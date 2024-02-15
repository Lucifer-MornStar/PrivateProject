import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './password.service';
import { CookieService } from './cookie.service';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { UsersService } from './users.service';
import { DbModule } from "../db/db.module";
import { AccountModule } from "../account/account.module";
import { BlockListModule } from "../block-list/block-list.module";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    DbModule,
    AccountModule,
    BlockListModule,
  ],
  providers: [AuthService, PasswordService, CookieService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
