import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { AppValidationConstants } from '../models/app-validation-constants';

export function dropdownValidator(required: boolean | null | string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value) {
      if ((value === -1 || value?.key === '-1' || value === -1 || value?.key === -1 || value === 'select' || value?.value === 'select')
        && (required === null || required === undefined || required === 'true' || required === true)) {
        return { dropdownValue: { value: control.value }, validationMessage: AppValidationConstants.dropDownHasValue }
      }
    }
    return null;
  }
}

@Directive({
  selector: '[appDropdownValue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DropdownValidatorDirective, multi: true }]
})

export class DropdownValidatorDirective {
  @Input() mandatory: boolean | null | string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return dropdownValidator(this.mandatory)(control);
  }

}
