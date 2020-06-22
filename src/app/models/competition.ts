import { Injectable } from "@angular/core";
import { Adapter } from "../shared/adapter";

interface Area {
  id: number;
  name: string;
}

type Plan = "TIER_ONE" | "TIER_TWO" | "TIER_THREE" | "TIER_FOUR";

export class Competition {
  constructor(
    public id: number,
    public name: string,
    public area: Area,
    public plan: Plan
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class CompetitionAdapter implements Adapter<Competition> {
  adapt(competition: Competition): Competition {
    return new Competition(
      competition.id,
      competition.name,
      competition.area,
      competition.plan
    );
  }
}
