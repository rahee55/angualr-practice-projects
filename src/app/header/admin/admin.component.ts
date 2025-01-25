import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-admin',
  imports: [UserListComponent,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [UserService]
})
export class AdminComponent {
  constructor( private userService: UserService){

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }
}
