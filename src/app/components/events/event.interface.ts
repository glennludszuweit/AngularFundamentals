import { ISession } from '../sessions/session.interface';

export interface ILocation {
  address: string;
  city: string;
  country: string;
}

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: ILocation;
  onlineUrl?: string;
  sessions?: ISession[];
}
