import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() sessions: any[] | undefined;
  @Output() setShowModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSessionSelect() {
    this.setShowModal.emit();
  }
}
