import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from '../session.interface';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() filterBy!: string;
  @Input() sortBy!: string;
  @Input() sessions: ISession[] | undefined;
  visibleSessions: ISession[] | undefined;

  constructor() {
    this.visibleSessions = this.sessions;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessionsByLevel(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessionsByLevel(filter: string) {
    if (filter === 'all') {
      return (this.visibleSessions = this.sessions);
    } else {
      return (this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLowerCase() === filter
      ));
    }
  }

  sortSessions(sort: string): any {
    if (sort === 'name') {
      return this.visibleSessions?.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    } else if (sort === 'votes') {
      this.visibleSessions?.sort(
        (a: any, b: any) => a.voters.length - b?.voters.length
      );
    } else {
      this.visibleSessions;
    }
  }
}
