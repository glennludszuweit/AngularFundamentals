import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../shared/toastr.service';
import { EventService } from '../event.service';
import { IEvent } from '../event.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe({
    //   next: (events) => (this.events = events),
    // });
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: any) {
    // this.toastrService.success(name);
  }
}
