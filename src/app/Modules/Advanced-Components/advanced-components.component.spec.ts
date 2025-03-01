import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedComponentsComponent } from './advanced-components.component';

describe('AdvancedComponentsComponent', () => {
  let component: AdvancedComponentsComponent;
  let fixture: ComponentFixture<AdvancedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
