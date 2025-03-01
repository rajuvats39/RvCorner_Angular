import { Injectable, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModelPopupService {

  public viewPopupContainer?: ViewContainerRef;

  constructor(
    private modalService: NgbModal
  ) { }

  set popupContainer(viewPopupContainer: ViewContainerRef) {
    this.viewPopupContainer = viewPopupContainer;
  }

  open<T>(component: any, dialogData: T, right = false, containerRef?: ViewContainerRef, size?: 'sm' | 'md' | 'lg') {
    const modalRef = this.modalService.open(component, {
      container: containerRef || this.viewPopupContainer?.element.nativeElement,
      windowClass: right ? 'custom-css-class' : ''
    });
    modalRef.componentInstance.dialogData = dialogData;
    return modalRef;
  }

}