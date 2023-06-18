export class User{
    name: string;
    age: number;
    email: string;
    password: string;
    constructor(name: string, age: number, email: string, password: string){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}