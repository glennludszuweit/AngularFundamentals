import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [
    SessionsListComponent,
    CreateSessionComponent,
    SessionsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SessionsComponent],
})
export class SessionModule {}
