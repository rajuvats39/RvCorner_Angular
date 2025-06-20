import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydevelopmentsComponent } from './mydevelopments.component';

describe('MydevelopmentsComponent', () => {
  let component: MydevelopmentsComponent;
  let fixture: ComponentFixture<MydevelopmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MydevelopmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
