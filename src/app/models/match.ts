import { Adapter } from "../shared/adapter";
import { Injectable } from "@angular/core";

type Status =
  | "IN_PLAY"
  | "PAUSED"
  | "SCHEDULED"
  | "FINISHED"
  | "POSTPONED"
  | "SUSPENDED"
  | "CANCELLED";

interface Team {
  id: number;
  name: string;
}

interface Score {
  winner: "HOME_TEAM" | "AWAY_TEAM";
  duration: "REGULAR";
  fullTime: {
    homeTeam: number;
    awayTeam: number;
  };
  halfTime: {
    homeTeam: number;
    awayTeam: number;
  };
  extraTime: {
    homeTeam: number | null;
    awayTeam: number | null;
  };
}

interface Goal {
  minute: number;
  team: Team;
  scorer: {
    id: number;
    name: string;
  };
}

export class Match {
  constructor(
    public id: number,
    public status: Status,
    public attendance: number,
    public group: string,
    public homeTeam: Team,
    public awayTeam: Team,
    public score: Score,
    public goals: Goal[]
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class MatchAdapter implements Adapter<Match> {
  adapt(match: Match): Match {
    return new Match(
      match.id,
      match.status,
      match.attendance,
      match.group,
      match.homeTeam,
      match.awayTeam,
      match.score,
      match.goals
    );
  }
}
