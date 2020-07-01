import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './entities/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    public authError:boolean
    constructor(private http:HttpClient, private userService:UserService, private router:Router, ){
        this.authError = false;
    }

    logIn(user:User){
        console.log(user);
        let u:User = null;
         this.http.post('http://localhost:8080/api/getUser', user).subscribe(
            (data:{username:string, email:string, password:string}) => {
                console.log(data);
                    if(data != null){
                        u = new User(data.username, data.email, data.password);
                        u.erasePassword();
                        this.userService.user = u;
                        console.log(u);
                        this.userService.isLogged = true;
                        this.router.navigate(['/home']);
                    }
                    else{
                        this.authError = true;
                    }
            }
        );
    }

    signUp(user:User) {

        console.log(user);
        
    this.http.post('http://localhost:8080/api/create', user).subscribe(
                (data) => {
                    console.log(data);
                }
            );
         

    }

}