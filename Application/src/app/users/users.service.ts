import { Injectable } from '@angular/core';
import { Users } from './users';
import { USERS } from './users-list';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList: Users[]=USERS
  getUsersList():Users[]{
    return USERS;
  }
  addTolist(){
    let user = new Users()
  }

  constructor() { }
}
