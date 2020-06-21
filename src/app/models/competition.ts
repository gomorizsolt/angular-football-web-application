import { Injectable } from "@angular/core";
import { Adapter } from "../shared/adapter";

export class Competition {
  constructor(public id: number, public name: string, public area: string) {}
}

@Injectable({
  providedIn: "root"
})
export class CompetitionAdapter implements Adapter<Competition> {
  adapt(competition: any) {
    return new Competition(competition.id, competition.name, competition.area.name);
  }
}
