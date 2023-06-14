import { Controller, Get,Post } from '@nestjs/common';

@Controller('/users')
 export class usersController{

    @Get("name")
    getUsers(){
        return {'SAZZAD': 'Hossain'};
    }
    @Post("addname")
    postUsers(){
        

    }

}