import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule, Routes} from '@angular/router';


const userRoutes: Routes= [
  {
    path : 'users', component : ListUsersComponent
  },
  {
    path : "add", component : AddUserComponent
  },
]

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(userRoutes)
  ]
})
export class UsersModule { }
