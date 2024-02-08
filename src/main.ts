import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as process from 'process';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => {
      console.log('start');
    });
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
