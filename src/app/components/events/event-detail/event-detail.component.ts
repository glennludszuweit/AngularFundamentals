import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  addMode!: boolean;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.event = this.eventService.getEvent(Number(id));
        this.addMode = false;
      },
    });
  }

  toggleAddMode() {
    this.addMode = !this.addMode;
  }
}
