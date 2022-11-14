import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '../session.interface';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnInit {
  @Input() sessions: ISession[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
