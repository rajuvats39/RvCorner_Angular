import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePropertyComponent } from './style-property.component';

describe('StylePropertyComponent', () => {
  let component: StylePropertyComponent;
  let fixture: ComponentFixture<StylePropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylePropertyComponent]
    });
    fixture = TestBed.createComponent(StylePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
