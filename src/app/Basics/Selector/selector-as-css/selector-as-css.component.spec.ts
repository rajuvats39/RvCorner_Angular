import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAsCSSComponent } from './selector-as-css.component';

describe('SelectorAsCSSComponent', () => {
  let component: SelectorAsCSSComponent;
  let fixture: ComponentFixture<SelectorAsCSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorAsCSSComponent]
    });
    fixture = TestBed.createComponent(SelectorAsCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
