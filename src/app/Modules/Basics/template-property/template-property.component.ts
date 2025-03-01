import { Component } from '@angular/core';

@Component({
  selector: 'app-template-property',
  template: `
  <div class="row mb-5">
    <div class="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
        <span class="fw-bold text-primary">Template Property</span>
    </div>
    <div class="col-12 card shadow bg-light rounded p-2 border-1 border-secondary">
    <p> This is Template property.</p>
    </div>
</div>
`,
  styleUrls: ['./template-property.component.scss']
})
export class TemplatePropertyComponent {

}
