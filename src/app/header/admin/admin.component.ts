import { UserService } from './../../user.service';
import { Component, inject, Inject } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-admin',
  imports: [UserListComponent,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  // providers: [{provide: 'USER-SERVICE', useClass: UserService}]
  providers: [UserService]
})
export class AdminComponent {
  // constructor(@Inject('USER-SERVICE') private userService: UserService){

  // }
  private userService: UserService = inject(UserService)

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }
}
