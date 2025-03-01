import { FormControlMDFComponent } from './model-driven/form-control-mdf/form-control-mdf.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ValidationModule } from './../../Shared/validation/validation.module';
import { FormBuilderMDFComponent } from './model-driven/form-builder-mdf/form-builder-mdf.component';
import { SetValueMDFComponent } from './model-driven/set-value-mdf/set-value-mdf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetValueTDFComponent } from './template-driven/set-value-tdf/set-value-tdf.component';


@NgModule({
  declarations: [
    FormComponent,
 TemplateDrivenComponent,
    ModelDrivenComponent,
    SetValueTDFComponent,
    FormControlMDFComponent,
    FormBuilderMDFComponent,
    SetValueMDFComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationModule

  ]
})
export class FormModule { }
