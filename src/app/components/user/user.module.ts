import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { AuthService } from './auth.service';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'login', component: UserLoginComponent },
    ],
  },
];

@NgModule({
  declarations: [UserComponent, UserProfileComponent, UserLoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}
