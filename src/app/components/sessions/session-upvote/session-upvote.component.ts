import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-session-upvote',
  templateUrl: './session-upvote.component.html',
  styleUrls: ['./session-upvote.component.css'],
})
export class SessionUpvoteComponent {
  @Input() count: number | undefined;
  @Input() voted: boolean | undefined;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit();
  }
}
