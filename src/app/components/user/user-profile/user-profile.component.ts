import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
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

  saveProfile(values: any) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(values.firstName, values.lastName);
      this.router.navigate(['/events']);
    }
  }

  onCancel() {
    this.router.navigate(['/events']);
  }
}
