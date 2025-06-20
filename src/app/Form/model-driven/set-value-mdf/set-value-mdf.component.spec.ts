import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetValueMDFComponent } from './set-value-mdf.component';

describe('SetValueMdfComponent', () => {
  let component: SetValueMDFComponent;
  let fixture: ComponentFixture<SetValueMDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetValueMDFComponent]
    });
    fixture = TestBed.createComponent(SetValueMDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
