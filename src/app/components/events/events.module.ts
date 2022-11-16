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

import { EventsResolver } from './events.resolver';

import { EventService } from './event.service';

import { ActivatorGuard } from './activator.guard';
import { DeactivatorGuard } from './deactivator.guard';
import { ValidateLocationDirective } from '../../shared/validate-location.directive';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    resolve: {
      events: EventsResolver,
    },
    children: [
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
    ValidateLocationDirective,
  ],
  providers: [EventService, ActivatorGuard, DeactivatorGuard, EventsResolver],
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
