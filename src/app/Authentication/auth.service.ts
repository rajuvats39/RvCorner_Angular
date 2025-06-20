import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TokenApiModel } from './models/token-api.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppGlobalService } from '../Shared/app-global.service';
import { AppHttpClientService } from '../Shared/app-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private userPayload: any;

  constructor(
    private httpClient: AppHttpClientService,
    private appGlobalService: AppGlobalService
  ) {
    this.userPayload = this.decodeToken();
    console.log('User Payload:', this.userPayload);
  }

  public login(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.authenticate, request);
  }

  public signup(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.register, request);
  }

  public getAllUsers(): Observable<any> {
    return this.httpClient.get<any, any>(this.appGlobalService.authenticationApiUrls.getAllUsers);
  }

  public updateUser(request: any): Observable<any> {
    return this.httpClient.put<any, any>(this.appGlobalService.authenticationApiUrls.updateUser, request);
  }

  public deleteUser(request: number): Observable<any> {
    return this.httpClient.delete<any, any>(this.appGlobalService.authenticationApiUrls.deleteUser, request);
  }

   public renewToken(request: TokenApiModel): Observable<any> {
    return this.httpClient.post<any, any>(this.appGlobalService.authenticationApiUrls.refreshToken, request);
  }

  // Store token in localStorage
  public storeToken(tokenValue: string): void {
    localStorage.setItem('token', tokenValue);
  }

  // Store refresh token in localStorage
  public storeRefreshToken(tokenValue: string): void {
    localStorage.setItem('refreshToken', tokenValue);
  }

  // Retrieve token
  public getToken(): any {
    return localStorage.getItem('token');
  }

  // Check if token exists (user is "logged in")
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Decode token to get user information(token is in the encripted format)
  public decodeToken(): any {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  //Get FullName from token
  public getFullNameFromToken() {
    if (this.userPayload) {
      return this.userPayload.unique_name;
    }
  }

  //Get Role from token
  public getRoleFromToken() {
    if (this.userPayload) {
      return this.userPayload.role;
    }
  }

  public getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

}