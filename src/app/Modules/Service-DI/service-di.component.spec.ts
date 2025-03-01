import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDIComponent } from './service-di.component';

describe('ServiceDIComponent', () => {
  let component: ServiceDIComponent;
  let fixture: ComponentFixture<ServiceDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
