import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydevelopmentSharedService {

  private myDevDetails: any;

  constructor() { }

  public setMyDevDetails(data: any): void {
    this.myDevDetails = data;
  }

  public getMyDevDetails(): void {
    return this.myDevDetails;
  }
  
}
