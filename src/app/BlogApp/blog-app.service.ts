import { Injectable } from '@angular/core';
import { AppHttpClientService } from '../Shared/app-http-client.service';
import { MydevelopmentGlobalService } from '../Modules/MyDevelopments/mydevelopment-global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {

  constructor(
    private httpClient: AppHttpClientService,
    private mydevelopmentGlobalService: MydevelopmentGlobalService
  ) { }

  public getAllBlogs(): Observable<any> {
    return this.httpClient.get<any, any>(this.mydevelopmentGlobalService.blogAppUrls.getAllBlogs);
  }

  public addBlog(request: any): Observable<any> {
    return this.httpClient.post<any, any>(this.mydevelopmentGlobalService.blogAppUrls.addBlog, request);
  }

  public updateBlog(request: any): Observable<any> {
    return this.httpClient.put<any, any>(this.mydevelopmentGlobalService.blogAppUrls.updateBlog, request);
  }

  public deleteBlog(request: any): Observable<any> {
    return this.httpClient.delete<any, any>(this.mydevelopmentGlobalService.blogAppUrls.deleteBlog, request);
  }

  public getBlogById(id: number): Observable<any> {
    return this.httpClient.get<any, any>(`${this.mydevelopmentGlobalService.blogAppUrls.getAllBlogs}/${id}`);
  }

}