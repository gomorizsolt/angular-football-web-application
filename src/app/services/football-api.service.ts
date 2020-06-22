import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Competition, CompetitionAdapter } from "../models/competition";
import { map } from "rxjs/operators";
import { Match, MatchAdapter } from "../models/match";

@Injectable({
  providedIn: "root",
})
export class FootballApiService {
  private readonly BASE_URL = "https://api.football-data.org/v2";

  constructor(
    private httpClient: HttpClient,
    private competitionAdapter: CompetitionAdapter,
    private matchAdapter: MatchAdapter
  ) {}

  listCompetitions(): Observable<Competition[]> {
    const endpoint = `${this.BASE_URL}/competitions`;

    return this.httpClient
      .get<{ competitions: Competition[] }>(endpoint)
      .pipe(
        map(({ competitions }) =>
          competitions
            .filter((competition) => competition.plan === "TIER_ONE")
            .map((competition) => this.competitionAdapter.adapt(competition))
        )
      );
  }

  listMatches(
    competitionId: number
  ): Observable<{ competition: Competition; matches: Match[] }> {
    const endpoint = `${this.BASE_URL}/competitions/${competitionId}/matches`;

    return this.httpClient
      .get<{ competition: Competition; matches: Match[] }>(endpoint)
      .pipe(
        map(({ competition, matches }) => ({
          competition,
          matches: matches.map((match) => this.matchAdapter.adapt(match)),
        }))
      );
  }

  // TODO
  // listEvents(matchId: number) {
  //   const endpoint = `${this.BASE_URL}/matches/${matchId}`;

  //   return this.httpClient.get(endpoint);
  // }
}
