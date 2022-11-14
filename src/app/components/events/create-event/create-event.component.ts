import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  newEvent!: any;
  isDirty: boolean = true;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(values: any): void {
    this.eventService.createEvent(values);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  onCancel(): void {
    this.router.navigate(['/events']);
  }
}
