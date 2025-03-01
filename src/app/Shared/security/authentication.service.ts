import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AppHttpClientService } from '../app-http-client.service';
import { AppGlobalService } from '../app-global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private httpClient: AppHttpClientService,
    private appGlobalService: AppGlobalService
  ) { }

  public getAllUser() {
    return this.httpClient.get(this.appGlobalService.authenticationApiUrls.user);
  }

  public getAllRole() {
    return this.httpClient.get(this.appGlobalService.authenticationApiUrls.role);
  }

  public getUserById(request: any): Observable<any> {
    return this.httpClient.get<any, any>(this.appGlobalService.authenticationApiUrls.user, request);
  }

  public registerUser(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.user, request);
  }

  public updateUser(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.user, request);
  }

  public deleteUser(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.user, request);
  }

  public isLoggedIn() {
    return sessionStorage.getItem('userName') != null;
  }

  public getUserRole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }

}
