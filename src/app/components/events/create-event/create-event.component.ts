import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  newEvent!: any;
  isDirty = true;

  constructor(private eventService: EventService, private router: Router) {}

  onCreate(values: any): void {
    this.eventService.createEvent(values).subscribe({
      next: () => {
        this.isDirty = false;
        this.router.navigate(['/events']);
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/events']);
  }
}
