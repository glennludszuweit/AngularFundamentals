import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event.interface';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => (this.events = data),
    });
  }
}
