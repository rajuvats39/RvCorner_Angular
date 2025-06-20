import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePropertyComponent } from './template-property.component';

describe('TemplatePropertyComponent', () => {
  let component: TemplatePropertyComponent;
  let fixture: ComponentFixture<TemplatePropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePropertyComponent]
    });
    fixture = TestBed.createComponent(TemplatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
