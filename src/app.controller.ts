import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCustomerDto } from './dto/create-customer.dto'
import {CreateInvestorDto} from "./dto/create-investor.dto";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    test(): { test: string } {
        return {test: 'testing'};
    }

    @Post('customer')
    async saveCustomerData(@Body() data: CreateCustomerDto) {
      return await this.appService.saveCustomerData(data)
    }

    @Post('investor')
    async saveUserData(@Body() data: CreateInvestorDto) {
        return await this.appService.saveInvestorData(data)
    }
}
