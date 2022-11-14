import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../events/event.interface';
import { EventService } from '../events/event.service';
import { ISession } from './session.interface';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styles: [
    `
      .container {
        margin-bottom: 2em;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
      }
    `,
  ],
})
export class SessionsComponent implements OnInit {
  @Input() event: any;
  addMode: boolean = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  toggleAddSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions?.map((s: IEvent) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions?.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
