import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballApiService } from "../../services/football-api.service";
import { Observable } from "rxjs";
import { Match } from "src/app/models/match";
import { Competition } from "src/app/models/competition";

@Component({
  selector: "app-matches-page",
  templateUrl: "./matches-page.component.html",
  styleUrls: ["./matches-page.component.css"],
})
export class MatchesPageComponent implements OnInit {
  data$:
    | Observable<{
        matches: Match[];
        competition: Competition;
      }>
    | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: FootballApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const competitionId = params.get("competitionId");

      if (competitionId) {
        this.data$ = this.apiService.listMatches(+competitionId);
      }
    });
  }
}
