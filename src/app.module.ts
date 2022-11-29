import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Customer } from "./entity/customer.entity";
import {Investor} from "./entity/investor.entity";
ConfigModule.forRoot();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Customer, Investor],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Customer, Investor])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
