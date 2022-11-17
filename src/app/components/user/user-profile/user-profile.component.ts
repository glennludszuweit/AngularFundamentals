import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { AuthService } from '../auth.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userName!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.auth.checkAuthStatus().subscribe({
      next: (user) => {
        const thisUser = <IUser>user;
        this.userName = new FormControl(thisUser.userName);
        this.firstName = new FormControl(thisUser.firstName);
        this.lastName = new FormControl(thisUser.lastName);
        this.profileForm = new FormGroup({
          userName: this.userName,
          firstName: this.firstName,
          lastName: this.lastName,
        });
      },
    });

    this.userName = new FormControl({
      value: this.auth.currentUser?.userName,
      disabled: true,
    });
    this.firstName = new FormControl(this.auth.currentUser?.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-z].*'),
      Validators.minLength(2),
    ]);
    this.lastName = new FormControl(this.auth.currentUser?.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-z].*'),
      Validators.minLength(2),
    ]);
    this.profileForm = new FormGroup({
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  fieldErrorCheck(field: string): boolean {
    return (
      this.profileForm.controls[field].valid ||
      this.profileForm.controls[field].untouched
    );
  }

  saveProfile(values: IUser) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(values.firstName, values.lastName).subscribe({
        next: () => {
          this.toastrService.success('Profile updated successfuly.');
          this.router.navigate(['/events']);
        },
      });
    }
  }

  logout() {
    this.auth.logout().subscribe({
      next: () => this.router.navigate(['/user/login']),
    });
  }

  onCancel() {
    this.router.navigate(['/events']);
  }
}
