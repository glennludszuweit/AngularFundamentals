import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventsResolver } from './events.resolver';

import { EventService } from './event.service';

import { ActivatorGuard } from './activator.guard';
import { DeactivatorGuard } from './deactivator.guard';
import { CreateEventSessionComponent } from './create-event-session/create-event-session.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    resolve: {
      events: EventsResolver,
    },
    children: [
      {
        path: 'session/create',
        component: CreateEventSessionComponent,
      },
      {
        path: 'create',
        component: CreateEventComponent,
        canDeactivate: [DeactivatorGuard],
      },
      {
        path: ':id',
        component: EventDetailComponent,
        canActivate: [ActivatorGuard],
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
    CreateEventSessionComponent,
  ],
  providers: [EventService, ActivatorGuard, DeactivatorGuard, EventsResolver],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [EventsComponent],
})
export class EventsModule {}
