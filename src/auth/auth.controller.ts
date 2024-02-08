import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SignUpBodyDto } from './dto/SignUpBody.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { SignInBodyDto } from './dto/SignInBody.dto';
import { GetSessionInfoDto } from './dto/GetSessionInfo.dto';
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(@Body() body: SignUpBodyDto) {
    const { accessToken } = await this.authService.signUp(body);


  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {
    return null;
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('session')
  @ApiOkResponse({
    type: GetSessionInfoDto,
  })
  getSessionInfo() {}
}
