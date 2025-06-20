import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQAComponent } from './interview-qa.component';

describe('InterviewQAComponent', () => {
  let component: InterviewQAComponent;
  let fixture: ComponentFixture<InterviewQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewQAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
