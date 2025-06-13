import { Injectable } from '@angular/core';
import { AppHttpClientService } from '../../../Shared/app-http-client.service';
import { MydevelopmentGlobalService } from '../mydevelopment-global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCrudService {
  constructor(
    private httpClient: AppHttpClientService,
    private mydevelopmentGlobalService: MydevelopmentGlobalService
  ) { }

  public getStudents(): Observable<any> {
    return this.httpClient.get<any, any>(this.mydevelopmentGlobalService.studentCRUDApiUrls.getStudents);
  }

  public addStudent(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.mydevelopmentGlobalService.studentCRUDApiUrls.addStudent, request);
  }

  public updateStudent(request: any): Observable<any> {
    return this.httpClient.put<any, any>(this.mydevelopmentGlobalService.studentCRUDApiUrls.updateStudent, request);
  }

  public deleteStudent(request: any): Observable<any> {
    return this.httpClient.delete<any, any>(this.mydevelopmentGlobalService.studentCRUDApiUrls.deleteStudent, request);
  }

}