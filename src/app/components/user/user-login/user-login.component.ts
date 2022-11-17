import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  userName!: string;
  password!: string;
  mouseoverLogin!: boolean;
  invalidLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  login(formValues: any) {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe({
        next: (res) => {
          if (!res) {
            this.invalidLogin = true;
          } else {
            this.toastrService.success('Login successful');
            this.router.navigate(['/events']);
          }
        },
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
