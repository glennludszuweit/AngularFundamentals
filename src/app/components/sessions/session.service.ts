import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISession } from './session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      console.error({ operation, error });
      return of(result as T);
    };
  }

  addVote(eventId: number, session: ISession, userName: string) {
    session.voters?.push(userName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    return this.httpClient
      .post(url, {})
      .pipe(catchError(this.handleError('searchSessions')))
      .subscribe();
  }

  deleteVote(eventId: number, session: ISession, userName: string) {
    session.voters = session.voters?.filter((voter) => voter !== userName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.httpClient
      .delete(url)
      .pipe(catchError(this.handleError('deleteSession')))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string) {
    return session.voters?.includes(userName) ? true : false;
  }
}
