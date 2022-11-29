import { Injectable } from '@nestjs/common';
import { Customer } from "./entity/customer.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerInterface } from "./type/customer.type";
import { Investor } from "./entity/investor.entity";
import { InvestorInterface } from "./type/investor.type";


@Injectable()
export class AppService {

    constructor(
        @InjectRepository(Customer) private customerRepository: Repository<CustomerInterface>,
        @InjectRepository(Investor) private investorRepository: Repository<InvestorInterface>,

        ) {
    }

    async saveCustomerData(data: CustomerInterface) {
        const customer = new Customer;
        customer.name = data.name;
        customer.organization = data.organization;
        customer.email = data.email;
        return  this.customerRepository.save(data);
    }

    async saveInvestorData(data: InvestorInterface ) {
        const investor = new Investor();
        investor.name = data.name;
        investor.organization = data.organization;
        investor.email = data.email;
        investor.phone = data.phone;
        return  this.investorRepository.save(investor);
    }
}
