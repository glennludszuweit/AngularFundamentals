import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionsComponent } from './sessions.component';

import { DurationPipe } from 'src/app/shared/duration.pipe';
import { SessionUpvoteComponent } from './session-upvote/session-upvote.component';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    SessionsListComponent,
    CreateSessionComponent,
    SessionsComponent,
    DurationPipe,
    SessionUpvoteComponent,
  ],
  providers: [SessionService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SessionsComponent],
})
export class SessionModule {}
