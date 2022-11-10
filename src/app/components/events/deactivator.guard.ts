import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivatorGuard implements CanDeactivate<any> {
  constructor() {}

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) window.confirm('are you sure?');
    return true;
  }
}
