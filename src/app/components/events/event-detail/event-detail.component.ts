import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from 'src/app/components/events/event.service';
import { IEvent } from '../event.interface';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: IEvent | undefined;
  addMode!: boolean;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const id = Number(params['id']);
        this.eventService.getEvent(id).subscribe({
          next: (event: IEvent) => {
            this.event = event;
            this.addMode = false;
          },
        });
      },
    });
  }

  toggleAddMode() {
    this.addMode = !this.addMode;
  }
}
