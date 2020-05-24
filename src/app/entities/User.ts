export class User{
    constructor(private username:string, private email:string, private password:string){

    }

    erasePassword(){
        this.password = '';
    }

    public getUsername(): string{
        return this.username;
    }
    public getEmail(){
        return this.email;
    }
}