import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Competition, CompetitionAdapter } from "../models/competition";
import { Observable, throwError, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

enum Plan {
  TIER_ONE = "TIER_ONE",
  TIER_TWO = "TIER_TWO",
  TIER_THREE = "TIER_THREE",
  TIER_FOUR = "TIER_FOUR"
}

type CompetitionWithPlan = Competition & { plan: Plan };

interface CompetitionsResponse {
  count: number;
  filter: object;
  competitions: CompetitionWithPlan[];
}

@Injectable({
  providedIn: "root"
})
export class CompetitionService {
  private readonly endpoint = "http://api.football-data.org/v2/competitions";

  constructor(private httpClient: HttpClient, private adapter: CompetitionAdapter) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // let's pretend everything's is fine for now
    return of([]);
  }

  private keepFreeItems(competitions: CompetitionWithPlan[]) {
    return competitions.filter(competition => competition.plan === Plan.TIER_ONE);
  }

  list(): Observable<Competition[]> {
    const headers = new HttpHeaders({
      "X-Auth-Token": environment.apiKey
    });

    return this.httpClient.get<CompetitionsResponse>(this.endpoint, {
      headers
    })
      .pipe(
        map((data: CompetitionsResponse) =>
          this.keepFreeItems(data.competitions)
            .map(competition =>
              this.adapter.adapt(competition)),
          catchError(this.handleError)
        )
      );
  }
}
