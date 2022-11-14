import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/components/events/event.service';
import { IEvent } from '../event.interface';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event!: IEvent;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.event = this.eventService.getEvent(Number(id));
      },
    });
  }
}
