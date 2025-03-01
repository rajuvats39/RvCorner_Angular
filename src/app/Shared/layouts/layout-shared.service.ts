import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutSharedService {

  private sidebarToggleSource: Subject<void> = new Subject();
  public sidebarToggleSourceChanges$ = this.sidebarToggleSource.asObservable();

  public announceSidebarToggleChanges(): void {
    this.sidebarToggleSource.next();
  }

}
