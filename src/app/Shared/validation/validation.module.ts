import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ModelControlValidationDisplayDirective } from './model-control-validation-display.directive';
import { TemplateFormValidationDisplayDirective } from './template-form-validation-display.directive';
import { DropdownValidatorDirective } from './validators/dropdown-validator.directive';
import { PatternValidatorDirective } from './validators/pattern-validator.directive';

@NgModule({
  declarations: [
     ModelControlValidationDisplayDirective,
     TemplateFormValidationDisplayDirective,
     DropdownValidatorDirective,
     PatternValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModelControlValidationDisplayDirective,
    TemplateFormValidationDisplayDirective,
    DropdownValidatorDirective,
    PatternValidatorDirective
  ]
})
export class ValidationModule { }
