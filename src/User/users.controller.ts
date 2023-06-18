import { Controller, Get,Post,Body,Param } from '@nestjs/common';
import { create } from 'domain';
import { User } from './user.Dto';
let user =[];
@Controller('/users')
 export class usersController{
    
    @Get()
    getUsers(){
        return user;
    }


    @Post("/addname")
    postUsers(@Body() createuser: {name: string, age: number, email: string, password: string}){
        const newUser = new User(createuser.name,createuser.age,createuser.email,createuser.password);
        user.push(newUser);
        return user;

        



    }

    @Get("/getname/:name")
    getname(@Param('name') name: string){
        const user1 = user.find((user)=>user.name === name);
        if (user1) {
            var obj = {
               
                age: user1.age,
                email: user1.email,
                password: user1.password
            };
            console.log(obj)


          return obj;
        } else {
          return "User not found";

    }}

}