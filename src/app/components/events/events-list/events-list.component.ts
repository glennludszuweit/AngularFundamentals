import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events!: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(name: any) {
    this.toastrService.success(name);
  }
}
