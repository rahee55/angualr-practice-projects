import { Injectable, EventEmitter } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User('Asad Ali', 'Male', 'Monthly', 'Active'),
    new User('Heera Asad', 'Female', 'Yearly', 'Active'), 
    new User('Jahanzaib', 'Male', 'Quaterly', 'Inactive') 
  ];
  constructor() { }

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
  OnShowUserDetails(user: User){
    this.OnUserDetailsClicked.emit(user);
  }
  GetAllUsers(){
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string){
    let user = new User(name, gender, subType, status);
    this.users.push(user);
  }
}
