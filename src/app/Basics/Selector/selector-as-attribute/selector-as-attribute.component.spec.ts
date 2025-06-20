import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAsAttributeComponent } from './selector-as-attribute.component';

describe('SelectorAsAttributeComponent', () => {
  let component: SelectorAsAttributeComponent;
  let fixture: ComponentFixture<SelectorAsAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorAsAttributeComponent]
    });
    fixture = TestBed.createComponent(SelectorAsAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
