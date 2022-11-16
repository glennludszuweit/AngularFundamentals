import { Injectable } from '@angular/core';
import { ISession } from './session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  addVoter(session: ISession, userName: string) {
    session.voters?.push(userName);
  }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters?.filter((voter) => voter !== userName);
  }

  userHasVoted(session: ISession, userName: string) {
    return session.voters?.includes(userName) ? true : false;
  }
}
