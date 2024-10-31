import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { loggerConfig } from './config/logger/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, loggerConfig);
  const logger = new Logger(bootstrap.name)

  app.setGlobalPrefix('api/v1')
  await app.listen(process.env.PORT ?? 3000);

  logger.log(`Server listening: ${await app.getUrl()}`)
}
bootstrap();
