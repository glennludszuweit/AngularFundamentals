import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISession } from '../sessions/session.interface';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent {
  @Input() sessions: ISession[] | undefined;
  @Output() setShowModal = new EventEmitter();

  onSessionSelect() {
    this.setShowModal.emit();
  }
}
