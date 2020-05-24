import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../entities/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') private form: NgForm;
  public justSignedUp: boolean = false;
  public inValidCredentials: boolean = false;
  

  constructor(private route:ActivatedRoute, public service: AuthService, private userService: UserService, private router: Router) {
    this.userService.isLogged = false;
    this.userService.user = null;
   }

  ngOnInit(): void {
    this.service.authError=false;

    this.route.params
    .subscribe(
      (params:{signup:string}) => {
        console.log(this.justSignedUp);
        if(params.signup == "true"){
          this.justSignedUp = true;
        }
        console.log(this.justSignedUp);
      }
    )
  }

  onSubmit(){

    let formValue:{username:string, password:string} = this.form.value;
    let user: User = new User(formValue.username, "example@example.com", formValue.password);
    this.service.logIn(user);
    

  }
}
