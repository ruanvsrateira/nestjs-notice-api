import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose';
import { DATABASE_URL } from './settings';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await connect(DATABASE_URL).then(() =>
    console.log('[Nest] Conectado com Banco de dados'),
  );
  await app.listen(3000);
}
bootstrap();
