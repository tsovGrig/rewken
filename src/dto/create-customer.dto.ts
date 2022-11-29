import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    organization: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

}