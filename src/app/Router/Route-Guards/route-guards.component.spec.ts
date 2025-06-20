import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardsComponent } from './route-guards.component';

describe('RouteGuardsComponent', () => {
  let component: RouteGuardsComponent;
  let fixture: ComponentFixture<RouteGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteGuardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
