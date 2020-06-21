import { Component, OnInit } from "@angular/core";
import { Competition } from "../../models/competition";
import { CompetitionService } from "../../services/competition.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  competitions$: Observable<Competition[]>;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.competitions$ = this.competitionService.list();
  }
}
