import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [EventsListComponent, EventsComponent, EventDetailComponent],
  imports: [CommonModule],
  exports: [EventsComponent],
})
export class EventsModule {}
