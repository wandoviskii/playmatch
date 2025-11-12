export enum UserRole {
  PLAYER = 'PLAYER',
  COURT_OWNER = 'COURT_OWNER',
}

export type SkillLevel = 'Iniciante' | 'Intermediário' | 'Avançado';

export enum View {
  WELCOME = 'WELCOME',
  MAP = 'MAP',
  MY_GAMES = 'MY_GAMES',
  PROFILE = 'PROFILE',
  CREATE_GAME = 'CREATE_GAME',
  COURTS = 'COURTS',
  MATCH_DETAIL = 'MATCH_DETAIL',
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole;
  age: number;
  skillLevel: SkillLevel;
  favoriteSports: string[];
  city: string;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Match {
  id: string;
  sport: string;
  location: Location;
  dateTime: Date;
  playersNeeded: number;
  playersJoined: User[];
  court: Court;
  costPerPlayer: number;
  skillLevel: SkillLevel[];
  imageUrl: string;
}

export interface Court {
  id: string;
  ownerId: string;
  name: string;
  location: Location;
  sports: string[];
  pricePerHour: number;
  imageUrl: string;
}

export interface ChatMessage {
  id:string;
  user: User;
  text: string;
  timestamp: Date;
}