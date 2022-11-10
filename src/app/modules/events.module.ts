import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsListComponent } from '../components/events/events-list/events-list.component';
import { EventsComponent } from '../components/events/events.component';
import { EventDetailComponent } from '../components/events/event-detail/event-detail.component';
import { EventThumbnailComponent } from '../components/events/event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsComponent,
    EventThumbnailComponent,
    EventDetailComponent,
  ],
  imports: [CommonModule],
  exports: [EventsComponent],
})
export class EventsModule {}
