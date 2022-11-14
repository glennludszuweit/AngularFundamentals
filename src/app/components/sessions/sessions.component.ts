import { Component, Input, OnInit } from '@angular/core';
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
  @Input() sessions: ISession[] | undefined;
  @Input() eventId: number | undefined;
  addMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setAddMode() {
    this.addMode = !this.addMode;
  }
}
