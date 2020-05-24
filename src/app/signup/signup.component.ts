import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../entities/User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') private form: NgForm;

  constructor(private service:AuthService, private router:Router, private userService:UserService ) {
    this.userService.isLogged = false;
    this.userService.user = null;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    let formValue:{username:string, email: string, password:string} = this.form.value;
    console.log(this.form.value);
    let user: User = new User(formValue.username, formValue.email, formValue.password);
    this.service.signUp(user);
    this.router.navigate(['/login', {signup:true}]);
  }

}
