import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MydevelopmentGlobalService } from '../mydevelopment-global.service';
import { AppHttpClientService } from '../../Shared/app-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesManagementService {
  constructor(
    private httpClient: AppHttpClientService,
    private mydevelopmentGlobalService: MydevelopmentGlobalService
  ) { }

  public getAllDepartments(): Observable<any> {
    return this.httpClient.get<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.getAllDepartments);
  }

  public addDepartment(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.addDepartment, request);
  }

  public updateDepartment(request: any): Observable<any> {
    return this.httpClient.put<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.updateDepartment, request);
  }

  public deleteDepartment(request: any): Observable<any> {
    return this.httpClient.delete<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.deleteDepartment, request);
  }

  public getAllEmployees(): Observable<any> {
    return this.httpClient.get<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.getAllEmployees);
  }

  public addEmployee(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.addEmployee, request);
  }

  public updateEmployee(request: any): Observable<any> {
    return this.httpClient.put<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.updateEmployee, request);
  }

  public deleteEmployee(request: any): Observable<any> {
    return this.httpClient.delete<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.deleteEmployee, request);
  }

  public uploadFiles(request: FormData): Observable<any> {
    return this.httpClient.post<any, any>(this.mydevelopmentGlobalService.employeesManagementUrls.uploadFiles, request);
  }

}