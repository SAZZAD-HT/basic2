import { Injectable } from "@nestjs/common";
import { Admindto } from "./Admin.Dto";

let admin=[];
var onj={
    "userId": 1,
    "userName": "SAZZAD",
    "email": "SAZZAD@gmail.com",
"password": "0123",
"role": "User",
"status": "Active",
"createdDate": "16/6/2023",
"createdBy": "SAZZAD"}
admin.push(onj);
var onj1={  "userId": 2,
"userName": "SAMI",
"email": "sami@gmail.com",
"password": "0123",
"role": "User",
"status": "Active",
"createdDate": "16/6/2023",
"createdBy": "SAZZAD"}
admin.push(onj1);

@Injectable()
export class AdminService{

    getAdmins(){//
        return admin;
    }
    createAdmin(createadmin:Admindto){
        
        admin.push(createadmin);
        return admin+"admin created";
    }
    getAdminById(id:number){
        const admin1 = admin.find((admin)=>admin.userId === id);
         
        debugger; 
        if (admin1) {
            var obj = {
                userId: admin1.userId,
                userName: admin1.userName,
                email: admin1.email,
                password: admin1.password,
                role: admin1.role,
                status: admin1.status,
                createdDate: admin1.createdDate,
                createdBy: admin1.createdBy
            };
            console.log(obj)
            return obj;
    }}

    updateAdminById(id:number,updateadmin:Admindto){
        const admin1 = admin.find((admin)=>admin.userId === id);
        if (admin1) {
            var obj = {
                userId: admin1.userId,
                userName: admin1.userName,
                email: admin1.email,
                password: admin1.password,
                role: admin1.role,
                status: admin1.status,
                createdDate: admin1.createdDate,
                createdBy: admin1.createdBy
            };
            console.log(obj)
            return obj;

    }}
    deleteAdminById(id:number){
        const admin1 = admin.find((admin)=>admin.userId === id);
        if (admin1) {
            var obj = {
                userId: admin1.userId,
                userName: admin1.userName,
                email: admin1.email,
                password: admin1.password,
                role: admin1.role,
                status: admin1.status,
                createdDate: admin1.createdDate,
                createdBy: admin1.createdBy
            };
            console.log(obj)
            return obj; 

    }}

   



}