import {IsEmail, IsEmpty, IsNotEmpty, IsString, Matches} from'class-validator';
export class Admindto{

    userId:number;
    @IsString({message:"invalid name"})
   @Matches( /^[a-zA-Z]+$/, {message:"enter a proper name"})
    userName:string|number;
    @IsEmail({}, {message:"invalid email"})
    email:string;
    password:string;
    role:string;
    status:string;
    createdDate:Date;
    createdBy:string;
   

}