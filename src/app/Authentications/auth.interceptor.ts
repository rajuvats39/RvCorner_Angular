import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AppNotificationService } from '../Shared/notifications/app-notification.service';
import { Router } from '@angular/router';
import { TokenApiRquestModel } from './models/token-api.model-request';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    private appNotificationService: AppNotificationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.authService.getToken();
    if (myToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${myToken}` }  // "Bearer "+myToken
      })
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            return this.handleUnAuthorizedError(request, next);
          }
        }
        return throwError(() => err)
      })
    );
  }

  handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler) {
    const tokeApiModel = new TokenApiRquestModel();
    tokeApiModel.accessToken = this.authService.getToken()!;
    tokeApiModel.refreshToken = this.authService.getRefreshToken()!;
    return this.authService.renewToken(tokeApiModel)
      .pipe(switchMap((data: TokenApiRquestModel) => {
        this.authService.storeRefreshToken(data.refreshToken);
        this.authService.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${data.accessToken}` }  // "Bearer "+myToken
        })
        return next.handle(req);
      }),
        catchError((err) => {
          return throwError(() => {
            this.appNotificationService.warning("Token is expired, Please Login again");
            this.router.navigate(['login'])
          })
        })
      )
  }
}