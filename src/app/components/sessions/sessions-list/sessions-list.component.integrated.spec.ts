import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from 'src/app/shared/duration.pipe';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../session.interface';
import { SessionService } from '../session.service';
import { SessionsListComponent } from './sessions-list.component';

describe('SessionsListComponent', () => {
  let mockAuthService;
  let mockSessionService;
  let fixture: ComponentFixture<SessionsListComponent>;
  let component: SessionsListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  const mockSessions: ISession[] = [
    {
      id: 1,
      name: 'Breakfast',
      presenter: 'Tony',
      duration: 1,
      level: 'beginner',
      abstract: 'Eat lots of meat!',
      voters: ['Gregg', 'Jeorg', 'Bobby'],
    },
    {
      id: 2,
      name: 'Lunch',
      presenter: 'Bobby',
      duration: 1,
      level: 'intermediate',
      abstract: 'Eat lots of meat again!',
      voters: ['Gregg', 'Jeorg', 'Dylan', 'Dreyfus', 'Tony'],
    },
  ];

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Test' },
    };
    mockSessionService = { userHasVoted: () => false };
    TestBed.configureTestingModule({
      declarations: [SessionsListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: SessionService, useValue: mockSessionService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SessionsListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  it('It should display the correct session name', () => {
    component.sessions = [mockSessions[0]];
    component.filterBy = 'all';
    component.sortBy = 'name';
    component.eventId = 5;
    component.ngOnChanges();

    fixture.detectChanges();

    expect(element.querySelector('h4')?.textContent).toBe('Breakfast');
    expect(debugEl.nativeElement.querySelector('h4').textContent).toBe(
      'Breakfast'
    );
    expect(debugEl.query(By.css('.presenter')).nativeElement.textContent).toBe(
      'Tony'
    );
  });

  it('It should filter the sessions correctly', () => {
    component.sessions = mockSessions;
    component.filterBy = 'intermediate';
    component.sortBy = 'name';
    component.eventId = 5;
    component.ngOnChanges();

    expect(component.visibleSessions?.length).toEqual(1);
  });

  it('It should sort the sessions by name', () => {
    component.sessions = mockSessions;
    component.filterBy = 'all';
    component.sortBy = 'name';
    component.eventId = 5;
    component.ngOnChanges();

    expect(component.visibleSessions?.[1].name).toBe('Lunch');
  });
});
