import { Component, OnInit } from "@angular/core";
import { Competition } from "../../models/competition";
import { FootballApiService } from "../../services/football-api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-competitions-page",
  templateUrl: "./competitions-page.component.html",
  styleUrls: ["./competitions-page.component.css"],
})
export class CompetitionsPageComponent implements OnInit {
  competitions$: Observable<Competition[]> | undefined;

  constructor(private apiService: FootballApiService) {}

  ngOnInit(): void {
    this.competitions$ = this.apiService.listCompetitions();
  }
}
