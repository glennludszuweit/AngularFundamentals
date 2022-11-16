import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SessionModule } from '../sessions/session.module';

import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { ValidateLocationDirective } from '../../shared/validate-location.directive';

import { EventService } from './event.service';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    children: [
      {
        path: 'create',
        component: CreateEventComponent,
      },
      {
        path: ':id',
        component: EventDetailComponent,
      },
      { path: '', component: EventsListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    EventsListComponent,
    EventsComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    ValidateLocationDirective,
  ],
  providers: [EventService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SessionModule,
    RouterModule.forChild(routes),
  ],
  exports: [EventsComponent],
})
export class EventsModule {}
