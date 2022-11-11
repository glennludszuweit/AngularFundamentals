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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userName: FormControl = new FormControl(
      {
        value: this.auth.currentUser?.userName,
        disabled: true,
      },
      Validators.required
    );
    const firstName: FormControl = new FormControl(
      this.auth.currentUser?.firstName,
      Validators.required
    );
    const lastName: FormControl = new FormControl(
      this.auth.currentUser?.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      userName: userName,
      firstName: firstName,
      lastName: lastName,
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
