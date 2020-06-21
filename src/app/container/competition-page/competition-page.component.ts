import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-competition-page",
  templateUrl: "./competition-page.component.html",
  styleUrls: ["./competition-page.component.css"]
})
export class CompetitionPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
