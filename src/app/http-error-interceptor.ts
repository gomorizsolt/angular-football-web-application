import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../environments/environment";

export class HttpErrorInterceptor implements HttpInterceptor {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    } else {
      console.error(error.status, error.message);
    }

    return throwError("Something went wrong, please try again later.");
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authorizedRequest = request.clone({
      setHeaders: {
        "X-Auth-Token": environment.apiKey,
      },
    });

    return next.handle(authorizedRequest).pipe(catchError(this.handleError));
  }
}
