import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISession } from '../session.interface';

@Component({
  selector: 'app-session-upvote',
  templateUrl: './session-upvote.component.html',
  styleUrls: ['./session-upvote.component.css'],
})
export class SessionUpvoteComponent implements OnInit {
  @Input() count: number | undefined;
  @Input() voted: boolean | undefined;
  @Output() vote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.vote.emit();
  }
}
