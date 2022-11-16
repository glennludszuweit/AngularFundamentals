import { AuthService } from '../../user/auth.service';
import { ISession } from '../session.interface';
import { SessionService } from '../session.service';
import { SessionsListComponent } from './sessions-list.component';

describe('SessionsListComponent', () => {
  let component: SessionsListComponent;
  let mockAuthService: AuthService;
  let mockSessionService: SessionService;

  beforeEach(() => {
    component = new SessionsListComponent(mockAuthService, mockSessionService);
  });

  describe('ngOnChanges', () => {
    const mockSessions = [
      { name: 'session 5', level: 'intermediate' },
      { name: 'session 2', level: 'beginner' },
      { name: 'session 1', level: 'intermediate' },
      { name: 'session 3', level: 'advance' },
      { name: 'session 4', level: 'intermediate' },
    ];

    it('It should filter the sessions correctly', () => {
      component.sessions = <ISession[]>mockSessions;
      component.filterBy = 'intermediate';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions?.length).toEqual(3);
    });

    it('It should sort the sessions by name', () => {
      component.sessions = <ISession[]>mockSessions;
      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions?.[4].name).toBe('session 5');
    });
  });
});
