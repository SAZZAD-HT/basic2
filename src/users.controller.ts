import { Controller, Get } from '@nestjs/common';

@Controller('/users')
 export class usersController{

    @Get("name")
    getUsers(){
        return {'SAZZAD': 'Hossain'};
    }

}