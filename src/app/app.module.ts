// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// HTTP
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorInterceptor } from "./http-error-interceptor";

// Routing
import { AppRoutingModule } from "./app-routing.module";
import { CompetitionsPageComponent } from "./container/competitions-page/competitions-page.component";
import { MatchesPageComponent } from "./container/matches-page/matches-page.component";
import { EventPageComponent } from "./container/event-page/event-page.component";
import { PageNotFoundComponent } from "./container/page-not-found/page-not-found.component";

// Components
import { AppComponent } from "./container/app.component";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsPageComponent,
    MatchesPageComponent,
    EventPageComponent,
    PageNotFoundComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
