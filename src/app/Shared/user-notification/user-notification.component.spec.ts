import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserNotificationComponent } from './user-notification.component';

describe('MainComponent', () => {
  let component: UserNotificationComponent;
  let fixture: ComponentFixture<UserNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserNotificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
