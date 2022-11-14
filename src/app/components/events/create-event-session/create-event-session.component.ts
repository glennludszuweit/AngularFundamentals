import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../event.interface';

@Component({
  selector: 'app-create-event-session',
  templateUrl: './create-event-session.component.html',
  styleUrls: ['./create-event-session.component.css'],
})
export class CreateEventSessionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  createSession(values: any) {
    const session: ISession = {
      id: 1,
      name: values.name,
      presenter: values.presenter,
      duration: Number(values.duration),
      level: values.level,
      abstract: values.abstract,
      voters: [],
    };

    console.log(session);
  }
}
