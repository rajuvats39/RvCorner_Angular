import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { AppValidationConstants, Regex } from '../models/app-validation-constants';

export function patternValidator(nameRe: RegExp, type: string, message: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isValid: boolean;
    if (((type === 'email' || type === 'number' || type === 'alphanumeric' || type === 'numberWithDecimal')
      && (control.value == null) || (control.value != null && control.value?.toString().length === 0)) ||
      ((control.value == null || control.value?.length === 0) && type === 'notAllowSpace')) {
      return null;
    }
    if (Array.isArray(control.value)) {
      isValid = nameRe.test(String(control.value.concat()));
    } else {
      isValid = nameRe.test(control.value);
    }
    return isValid ? null : { [type]: { value: control.value }, validationMessage: message }
  }
}

@Directive({
  selector: '[appPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PatternValidatorDirective, multi: true }]
})

export class PatternValidatorDirective implements Validator {
  private regex: RegExp;
  private message = '';
  @Input() public patternType: string;
  constructor() { }

  validate = (control: AbstractControl): { [key: string]: any } | null => {
    switch (this.patternType) {
      case 'email':
        this.regex = Regex.emailRegex;
        this.message = AppValidationConstants.regex.email;
        break;
      case 'numeric':
        this.regex = Regex.numericRegex;
        this.message = AppValidationConstants.regex.numeric;
        break;
    }
    return patternValidator(new RegExp(this.regex, 'i'), this.patternType, this.message)(control);
  }
}