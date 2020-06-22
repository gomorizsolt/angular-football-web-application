import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, pluck } from "rxjs/operators";
import { Competition, Match, Event } from "../common/interfaces";

@Injectable({
  providedIn: "root",
})
export class FootballApiService {
  private readonly BASE_URL = "https://api.football-data.org/v2";

  constructor(private httpClient: HttpClient) {}

  fetchCompetitions(): Observable<Competition[]> {
    const endpoint = `${this.BASE_URL}/competitions`;

    return this.httpClient.get<{ competitions: Competition[] }>(endpoint).pipe(
      pluck("competitions"),
      map((competitions) =>
        competitions.filter((competition) => competition.plan === "TIER_ONE")
      )
    );
  }

  fetchMatches(
    competitionId: number
  ): Observable<{ competition: Competition; matches: Match[] }> {
    const endpoint = `${this.BASE_URL}/competitions/${competitionId}/matches`;

    return this.httpClient.get<{ competition: Competition; matches: Match[] }>(
      endpoint
    );
  }

  fetchEvent(matchId: number): Observable<Event> {
    const endpoint = `${this.BASE_URL}/matches/${matchId}`;

    return this.httpClient.get<{ match: Event }>(endpoint).pipe(pluck("match"));
  }
}
