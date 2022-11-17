import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISession } from '../sessions/session.interface';
import { IEvent } from './event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      console.error({ operation, error });
      return of(result as T);
    };
  }

  createEvent(event: IEvent) {
    return this.httpClient
      .post<IEvent>('/api/events', event)
      .pipe(catchError(this.handleError<IEvent>('createEvent')));
  }

  getEvents(): Observable<IEvent[]> {
    return this.httpClient
      .get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.httpClient
      .get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  searchSessions(term: string): Observable<ISession[]> {
    return this.httpClient
      .get<ISession[]>(`/api/sessions/search?search=${term}`)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }
}
