import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../event.interface';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event!: IEvent;

  constructor() {}

  ngOnInit(): void {}

  getStartTimeClass() {
    return {
      green: this.event.time === '8:00 am',
      white: this.event.time === '9:00 am',
      blue: this.event.time === '10:00 am',
    };
  }
}
