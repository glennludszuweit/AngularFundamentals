import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: IUser;

  constructor() {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Tony',
      lastName: 'Paloni',
      userName: userName,
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
