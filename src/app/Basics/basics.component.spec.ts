import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsComponent } from './basics.component';

describe('IntroductionComponent', () => {
  let component: BasicsComponent;
  let fixture: ComponentFixture<BasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicsComponent]
    });
    fixture = TestBed.createComponent(BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
