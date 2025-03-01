import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetricsComponent } from './telemetrics.component';

describe('TelemetricsComponent', () => {
  let component: TelemetricsComponent;
  let fixture: ComponentFixture<TelemetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelemetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
