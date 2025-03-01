

import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationService } from './validation.service';


@Directive({
  selector: '[appModelValidationDisplay]'
})
export class ModelControlValidationDisplayDirective implements OnInit, OnDestroy {

  public errorSpanId = '';
  statusChangeSubscription: Subscription;
  @Input() modelName: string;
  @HostListener('blur', ['$event']) handleClickEvent() {
    if (this.model.invalid) {
      this.showError(this.model.errors);
    } else {
      this.removeError();
    }
  }

  constructor(
    private elRef: ElementRef,
    private model: NgControl,
    private validationService: ValidationService
  ) { }

  ngOnInit(): void {
    this.errorSpanId = this.model.name + '-error-msg';
    if (this.model.touched || this.model.dirty || this.model.invalid) {
      this.showError(this.model.errors);
    }
    this.statusChangeSubscription = this.model.statusChanges.subscribe(() => {
      if ((this.model.touched || this.model.dirty) && this.model.invalid) {
        this.showError(this.model.errors);
      } else {
        this.removeError();
      }
    })
  }

  private showError(errors: ValidationErrors) {
    this.removeError();
    const errorMsg = this.validationService.getValidationMessage(errors, this.modelName);
    const errSpan = '<label class="text-danger w-100 mt-1"' +
      'test-id="error-lbl-' + this.errorSpanId + '" id="' + this.errorSpanId + '">' + errorMsg + '</label>'
    this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
  }

  public removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) { errorElement.remove(); }
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

}
