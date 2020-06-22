import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompetitionsPageComponent } from "./container/competitions-page/competitions-page.component";
import { MatchesPageComponent } from "./container/matches-page/matches-page.component";
import { EventPageComponent } from "./container/event-page/event-page.component";
import { PageNotFoundComponent } from "./container/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "competitions/:competitionId/matches/:matchId",
    component: EventPageComponent,
  },
  { path: "competitions/:competitionId", component: MatchesPageComponent },
  { path: "", component: CompetitionsPageComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
