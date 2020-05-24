import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../entities/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:User;
  constructor(private userService:UserService) { 
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    
  }

}
