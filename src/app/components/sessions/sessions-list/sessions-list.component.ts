import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../session.interface';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() filterBy!: string;
  @Input() sessions: ISession[] | undefined;
  visibleSessions: ISession[] | undefined;

  constructor() {
    this.visibleSessions = this.sessions;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }

    console.log(this.filterBy);
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      return (this.visibleSessions = this.sessions);
    } else {
      return (this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLowerCase() === filter
      ));
    }
  }
}
