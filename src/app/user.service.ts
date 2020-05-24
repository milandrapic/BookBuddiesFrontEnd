import { User } from './entities/User';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    public user:User;
    public isLogged = false;
    constructor(){
    }

}