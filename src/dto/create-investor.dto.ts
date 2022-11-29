import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateInvestorDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    organization: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone:string;

}