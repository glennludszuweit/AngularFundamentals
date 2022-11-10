import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  @Input() event: any;

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
