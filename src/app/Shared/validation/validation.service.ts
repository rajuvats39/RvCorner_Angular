import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public getValidationMessage(errors: ValidationErrors, modelName: string) {
    if (errors['required']) {
      return 'Please provide ' + modelName;
    } else if (errors['pattern']) {
      return 'Please provide a valid ' + modelName;
    } else if (errors['dropdownValue']) {
      return 'Please provide ' + modelName;
    } else if (errors['whitespace']) {
      return 'Please provide a valid ' + modelName;
    }
   return '';
  }
}
