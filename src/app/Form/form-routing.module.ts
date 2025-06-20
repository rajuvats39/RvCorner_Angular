import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderMDFComponent } from './model-driven/form-builder-mdf/form-builder-mdf.component';
import { FormControlMDFComponent } from './model-driven/form-control-mdf/form-control-mdf.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { SetValueMDFComponent } from './model-driven/set-value-mdf/set-value-mdf.component';
import { SetValueTDFComponent } from './template-driven/set-value-tdf/set-value-tdf.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'templeteDriven', component: TemplateDrivenComponent },
  { path: 'setValueTDF', component: SetValueTDFComponent },
  { path: 'modelDriven', component: ModelDrivenComponent },
  { path: 'formControlMDF', component: FormControlMDFComponent },
  { path: 'formBuilderMDF', component: FormBuilderMDFComponent },
  { path: 'setValueMDF', component: SetValueMDFComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
