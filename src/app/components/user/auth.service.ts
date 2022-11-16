import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: IUser;

  constructor(private httpClient: HttpClient) {}

  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password: password };
    return this.httpClient
      .post('/api/login', loginInfo)
      .pipe(tap((data: any) => (this.currentUser = <IUser>data['user'])))
      .pipe(catchError(() => of(false)));
  }

  logout() {
    this.currentUser = null as any;
    return this.httpClient.post('/api/logout', {});
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    return this.httpClient.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser
    );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthStatus() {
    return this.httpClient.get('/api/currentIdentity').pipe(
      tap((data) => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      })
    );
  }
}
