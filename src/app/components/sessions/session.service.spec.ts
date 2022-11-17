import { of } from 'rxjs';
import { ISession } from './session.interface';
import { SessionService } from './session.service';

describe('SessionService', () => {
  let sessionService: SessionService;
  let mockHttp: any;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    sessionService = new SessionService(mockHttp);
  });

  describe('addVote', () => {
    it('It should add a new voter to the list of voters', () => {
      const session = { id: 4, voters: ['tony', 'gregg', 'jorg'] };
      mockHttp.post.and.returnValue(of(false));

      sessionService.addVote(3, <ISession>session, 'amor');

      expect(session.voters.length).toEqual(4);
      expect(session.voters).toContain('amor');
    });

    it('It should call http.post with the correct URL', () => {
      const session = { id: 4, voters: ['tony', 'gregg', 'jorg'] };
      mockHttp.post.and.returnValue(of(false));

      sessionService.addVote(3, <ISession>session, 'amor');

      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/3/sessions/4/voters/amor',
        {}
      );
    });
  });

  describe('deleteVote', () => {
    it('It should delete a voter from the list of voters', () => {
      const session = { id: 4, voters: ['tony', 'gregg', 'jorg'] };
      mockHttp.delete.and.returnValue(of(false));

      sessionService.deleteVote(3, <ISession>session, 'tony');

      expect(session.voters.length).toEqual(2);
      expect(session.voters[0]).toBe('gregg');
    });

    it('It should call http.delete with the correct URL', () => {
      const session = { id: 4, voters: ['tony', 'gregg', 'jorg'] };
      mockHttp.delete.and.returnValue(of(false));

      sessionService.deleteVote(3, <ISession>session, 'tony');

      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/3/sessions/4/voters/tony'
      );
    });
  });
});
