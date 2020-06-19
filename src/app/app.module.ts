// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./container/app.component";
import { MainPageComponent } from "./container/main-page/main-page.component";
import { CompetitionPageComponent } from "./container/competition-page/competition-page.component";
import { EventPageComponent } from "./container/event-page/event-page.component";
import { PageNotFoundComponent } from "./container/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CompetitionPageComponent,
    EventPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
