import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  public isNullOrUndefined(object: any): boolean {
    return (!object);
  }

  public isNotNullAndDefined(object: any): boolean {
    return (object);
  }

  public isNotNullOrUndefined(object: any): boolean {
    return (this.isNullOrUndefined(object));
  }

  public isNullOrUndefinedOrEmpty(object: any) {
    return this.isNullOrUndefined(object) || object.toString().trim() === '';
  }

  public isNullOrEmpty(object: any): boolean {
    return !object || object.toString().trim().length === 0;
  }

  public isNotNullOrEmpty(object: any): boolean {
    return !this.isNullOrEmpty(object);
  }

  public isNotEmptyObject(object: any): boolean {
    return Object.keys(object).length > 0;
  }

}
