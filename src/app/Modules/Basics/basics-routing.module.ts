import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics.component';
import { SelectorComponent } from './Selector/selector.component';
import { StylePropertyComponent } from './style-property/style-property.component';
import { StyleUrlsPropertyComponent } from './style-urls-property/style-urls-property.component';
import { TemplatePropertyComponent } from './template-property/template-property.component';
import { TemplateUrlPropertyComponent } from './template-url-property/template-url-property.component';
import { SelectorAsAttributeComponent } from './Selector/selector-as-attribute/selector-as-attribute.component';
import { SelectorAsTagComponent } from './Selector/selector-as-tag/selector-as-tag.component';
import { SelectorAsCSSComponent } from './Selector/selector-as-css/selector-as-css.component';

const routes: Routes = [
  { path: '', component: BasicsComponent },
  { path: 'selectors', component: SelectorComponent },
  { path: 'selectors/asAttribute', component: SelectorAsAttributeComponent },
  { path: 'selectors/asCss', component: SelectorAsCSSComponent },
  { path: 'selectors/asTag', component: SelectorAsTagComponent },
  { path: 'styleProperty', component: StylePropertyComponent },
  { path: 'styleUrlsProperty', component: StyleUrlsPropertyComponent },
  { path: 'templateProperty', component: TemplatePropertyComponent },
  { path: 'templateUrlProperty', component: TemplateUrlPropertyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
