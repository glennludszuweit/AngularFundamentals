import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EventsResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
