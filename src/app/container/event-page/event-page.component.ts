import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballApiService } from "../../services/football-api.service";
import { Observable } from "rxjs";
import { Event } from "src/app/common/interfaces";

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.css"],
})
export class EventPageComponent implements OnInit {
  event$: Observable<Event> | undefined;

  constructor(
    private apiService: FootballApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const matchId = params.get("matchId");

      if (matchId) {
        this.event$ = this.apiService.fetchEvent(+matchId);
      }
    });
  }
}
