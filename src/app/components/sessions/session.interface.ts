export interface ISession {
  id: number;
  eventId?: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters?: string[];
}
