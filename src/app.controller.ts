import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloMessageDto } from './dto/HelloMessage.dto';
import { DbService } from './db/db.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @Get()
  async getHello(): Promise<HelloMessageDto> {
    const users = await this.dbService.user.findMany({});
    console.log(users);
    return { message: this.appService.getHello() };
  }
}
