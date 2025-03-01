import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAddEditDeleteComponent } from './students-add-edit-delete.component';

describe('StudentsAddEditDeleteComponent', () => {
  let component: StudentsAddEditDeleteComponent;
  let fixture: ComponentFixture<StudentsAddEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsAddEditDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAddEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
