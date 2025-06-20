import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MydevelopmentGlobalService } from './mydevelopment-global.service';
import { GetdataResponse } from './models/response/get-get-data.response.model';
import { AppHttpClientService } from '../Shared/app-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MydevelopmentService {

  constructor(
    private httpClient: AppHttpClientService,
    private mydevelopmentGlobalService: MydevelopmentGlobalService
  ) { }

  // public postData(request:any): Observable<any> {
  //   return this.httpClient.get<any, any>(this.mydevelopmentGlobalService.myDevelopmentApiUrls.getData, request);
  // }

  public getUserData(): Observable<GetdataResponse> {
    return this.httpClient.get<any, GetdataResponse>(this.mydevelopmentGlobalService.myDevelopmentApiUrls.getUserData);
  }

  private schedules: { [key: string]: string[] } = {};

  getSchedules(date: Date): string[] {
    const key = this.dateToKey(date);
    return this.schedules[key] || [];
  }

  addSchedule(date: Date, schedule: string) {
    const key = this.dateToKey(date);
    if (!this.schedules[key]) {
      this.schedules[key] = [];
    }
    this.schedules[key].push(schedule);
  }

  deleteSchedule(date: Date, schedule: string) {
    const key = this.dateToKey(date);
    this.schedules[key] = this.schedules[key].filter(item => item !== schedule);
  }

  hasSchedule(date: Date): boolean {
    const key = this.dateToKey(date);
    return this.schedules[key]?.length > 0;
  }

  private dateToKey(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

}
