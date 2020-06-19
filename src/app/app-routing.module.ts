import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./container/main-page/main-page.component";
import { CompetitionPageComponent } from "./container/competition-page/competition-page.component";
import { EventPageComponent } from "./container/event-page/event-page.component";
import { PageNotFoundComponent } from "./container/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: ":competition/:event", component: EventPageComponent },
  { path: ":competition", component: CompetitionPageComponent },
  { path: "", component: MainPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
