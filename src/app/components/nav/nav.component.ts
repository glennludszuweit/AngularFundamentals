import { Component } from '@angular/core';
import { EventService } from '../events/event.service';
import { ISession } from '../sessions/session.interface';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  searchTerm = '';
  showModal = false;
  foundSessions: ISession[] | undefined;

  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(term: string) {
    this.eventService.searchSessions(term).subscribe({
      next: (sessions) => {
        this.foundSessions = sessions;
      },
    });
  }

  clearSearchTerm() {
    this.searchTerm = '';
  }

  setShowModal() {
    this.showModal = !this.showModal;
  }
}
