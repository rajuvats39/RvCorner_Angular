import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data: any;

  private breadcrumAnnouncementSource = new Subject<any>();
  public breadcrumAnnouncementChanges$ = this.breadcrumAnnouncementSource.asObservable();

  private breadcrumNavigationSource = new Subject<any>();
  public breadcrumNavigationChanges$ = this.breadcrumNavigationSource.asObservable();

  private pageTitleDetailsAnnouncementSource = new Subject<any>();
  public pageTitleDetailsChanges$ = this.pageTitleDetailsAnnouncementSource.asObservable();

  private tableDataSubject = new BehaviorSubject<any[]>([]);
  tableData$ = this.tableDataSubject.asObservable();

  public announceBreadcrumChange(item: any) {
    this.breadcrumAnnouncementSource.next(item);
  }

  public announceNavigationChange(item: any) {
    this.breadcrumNavigationSource.next(item);
  }

  public announcepageTitleDetailsChanges(item: any) {
    this.pageTitleDetailsAnnouncementSource.next(item);
  }

  public updateTableData(newData: any[]) {
    this.tableDataSubject.next(newData);
  }

  public setData(data: any): void {
    this.data = data;
  }

  public getData(): void {
    return this.data;
  }

  public clearData(): void {
    this.data = null;
  }

}
