import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsRoutingModule } from './basics-routing.module';
import { SelectorAsAttributeComponent } from './Selector/selector-as-attribute/selector-as-attribute.component';
import { SelectorAsCSSComponent } from './Selector/selector-as-css/selector-as-css.component';
import { SelectorAsTagComponent } from './Selector/selector-as-tag/selector-as-tag.component';
import { SelectorComponent } from './Selector/selector.component';
import { BasicsComponent } from './basics.component';
import { StylePropertyComponent } from './style-property/style-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleUrlsPropertyComponent } from './style-urls-property/style-urls-property.component';
import { TemplatePropertyComponent } from './template-property/template-property.component';
import { TemplateUrlPropertyComponent } from './template-url-property/template-url-property.component';


@NgModule({
  declarations: [
    BasicsComponent,
    SelectorComponent,
    SelectorAsAttributeComponent,
    SelectorAsCSSComponent,
    SelectorAsTagComponent,
    StylePropertyComponent,
    StyleUrlsPropertyComponent,
    TemplatePropertyComponent,
    TemplateUrlPropertyComponent,
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BasicsModule { }
