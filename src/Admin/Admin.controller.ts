import { Body,Controller,Get,Post,Put,Delete } from "@nestjs/common/decorators";

import { AdminService } from "./Admin.Services";
import { Admindto } from "./Admin.Dto";


@Controller('/admin')
export class AdminController{
    constructor(private readonly adminService:AdminService){}

    @Get()
    getAdmins(){
        return this.adminService.getAdmins();
    }
    @Post("/addadmin")
    postAdmins(@Body() createadmin:Admindto){
        return this.adminService.createAdmin(createadmin);
    }
    
    @Get("/getadmin/:id")
    getAdminById(@Body() id:number){
       
        return this.adminService.getAdminById(id);
    }
    @Put("/updateadmin/:id")
    updateAdminById(@Body() id:number,@Body() updateadmin:Admindto){
        return this.adminService.updateAdminById(id,updateadmin);
    }
    @Delete("/deleteadmin/:id")
    deleteAdminById(@Body() id:number){
        return this.adminService.deleteAdminById(id);
    }
}