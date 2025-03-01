import { Directive, HostListener, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Directive({
  selector: '[appTemplateFormValidationDisplay]'
})
export class TemplateFormValidationDisplayDirective {

  @Input() templateForm: NgForm;
  @HostListener('click', ['$event'])
  handleClickEvent(event) {
    this.handleFormValidation(this.templateForm)
  }

  private handleFormValidation(templateForm: NgForm): void {
    if (!templateForm.valid) {
      const controls = templateForm.controls;
      for (const controlName of Object.keys(controls)) {
        const control = controls[controlName];
        (control as any).touched = true;
        (control.statusChanges as EventEmitter<any>).emit(control.status);
      }
    }
  }

}
