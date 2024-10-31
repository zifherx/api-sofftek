import { Module } from '@nestjs/common';
import { SwapiModule } from './swapi/swapi.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),SwapiModule, UsersModule],
})
export class AppModule {}
