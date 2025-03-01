import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUrlPropertyComponent } from './template-url-property.component';

describe('TemplateUrlPropertyComponent', () => {
  let component: TemplateUrlPropertyComponent;
  let fixture: ComponentFixture<TemplateUrlPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateUrlPropertyComponent]
    });
    fixture = TestBed.createComponent(TemplateUrlPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
