import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetValueTDFComponent } from './set-value-tdf.component';

describe('SetValueTDFComponent', () => {
  let component: SetValueTDFComponent;
  let fixture: ComponentFixture<SetValueTDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetValueTDFComponent]
    });
    fixture = TestBed.createComponent(SetValueTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
