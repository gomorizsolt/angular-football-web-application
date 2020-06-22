import { Plan, Status } from "./types";

interface Team {
  id: number;
  name: string;
  coach: {
    id: number;
    name: string;
  };
}

interface Area {
  id: number;
  name: string;
  ensignUrl: string;
}

interface Referee {
  id: number;
  name: string;
  nationality: string;
}

interface Score {
  winner: "HOME_TEAM" | "AWAY_TEAM";
  fullTime: {
    homeTeam: number;
    awayTeam: number;
  };
  haltTime: {
    homeTeam: number;
    awayTeam: number;
  };
}

export interface Competition {
  id: number;
  name: string;
  area: Area;
  plan: Plan;
}

export interface Match {
  id: number;
  status: Status;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

export interface Event {
  id: number;
  competition: Competition;
  status: Status;
  attendance: number;
  venue: string;
  homeTeam: Team;
  awayTeam: Team;
  referees: Referee[];
  utcDate: Date;
}
