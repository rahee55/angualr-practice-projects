import { UserService } from './../../../user.service';
import { Component, inject, Inject } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  // constructor(@Inject('USER-SERVICE') private userService: UserService){}
  private userService: UserService = inject(UserService)
  userList: User[] = [];
  ngOnInit() {
    this.userList = this.userService.GetAllUsers();
  }
  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
