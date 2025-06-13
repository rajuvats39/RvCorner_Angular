import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCrudComponent } from './students-list.component';

describe('StudentsCrudComponent', () => {
  let component: StudentsCrudComponent;
  let fixture: ComponentFixture<StudentsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
