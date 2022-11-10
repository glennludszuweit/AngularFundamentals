import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [{ path: 'profile', component: UserProfileComponent }],
  },
];

@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
