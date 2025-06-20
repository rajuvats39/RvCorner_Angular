import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleUrlsPropertyComponent } from './style-urls-property.component';

describe('StyleUrlsPropertyComponent', () => {
  let component: StyleUrlsPropertyComponent;
  let fixture: ComponentFixture<StyleUrlsPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleUrlsPropertyComponent]
    });
    fixture = TestBed.createComponent(StyleUrlsPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
