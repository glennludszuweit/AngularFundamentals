import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/event.service';
import { ISession } from '../sessions/session.interface';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  showModal: boolean = false;
  foundSessions: ISession[] | undefined;

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {}

  searchSessions(term: string) {
    this.eventService.searchSessions(term).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

  setShowModal() {
    this.showModal = !this.showModal;
  }
}
