import { Component, OnInit } from '@angular/core';
import { USERS } from '../users-list';
import { Users } from '../users';
import { Router} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {
  UsersList: Users[]=USERS;

  constructor(private router: Router, private usersService: UsersService){}
  ngOnInit(): void {
    this.UsersList = this.usersService.getUsersList();
  }
  addAnUser(){
    this.router.navigate(['/add']);
  }
}
