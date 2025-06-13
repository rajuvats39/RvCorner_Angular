import { Component } from '@angular/core';

@Component({
    selector: 'app-template-property',
    template: `
  <div class="row">
    <div class="col-12 rounded border border-secondary p-2 shadow-sm">
        <span class="fw-bold text-primary">Template Property</span>
    </div>
    <div class="col-12 rounded border mt-2 p-2 mt-2 shadow-sm">
    <p> This is Template property.</p>
    </div>
</div>
`,
    styleUrls: ['./template-property.component.scss'],
    standalone: false
})
export class TemplatePropertyComponent {

}
