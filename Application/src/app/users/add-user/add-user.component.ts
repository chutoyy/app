import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { USERS } from '../users-list';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {
  userForm : FormGroup;
  UsersList: Users[]=USERS;
  
  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService){}

  ngOnInit(): void {
    console.table(this.UsersList)
    
  }
  goToUsersList(){
    this.router.navigate(['/users']);
  }
  
  
}




