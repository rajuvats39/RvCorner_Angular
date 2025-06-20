import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationsService {
  private dataSubject = new Subject<string>();
  public data$ = this.dataSubject.asObservable();

  constructor() { }

  public sendData(data: string) {
    this.dataSubject.next(data);
  }

}
