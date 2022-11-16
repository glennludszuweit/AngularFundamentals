import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../session.interface';
import { SessionService } from '../session.service';

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
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.visibleSessions = this.sessions;
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessionsByLevel(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessionsByLevel(filter: string) {
    if (filter === 'all') {
      return (this.visibleSessions = this.sessions?.slice(0));
    } else {
      return (this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLowerCase() === filter
      ));
    }
  }

  sortSessions(sort: string): any {
    if (sort === 'name') {
      return this.visibleSessions?.sort((a, b) =>
        a.name > b.name ? 1 : b.name === a.name ? 0 : -1
      );
    } else if (sort === 'votes') {
      this.visibleSessions?.sort(
        (a: any, b: any) => a.voters.length - b?.voters.length
      );
    } else {
      this.visibleSessions;
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.sessionService.deleteVoter(
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.sessionService.addVoter(
        session,
        this.authService.currentUser.userName
      );
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions?.sort(this.sortSessions('votes'));
    }
  }

  userHasVoted(session: ISession) {
    return this.sessionService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }
}
