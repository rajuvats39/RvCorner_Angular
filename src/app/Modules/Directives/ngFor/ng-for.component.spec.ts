import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponent } from './ng-for.component';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForComponent]
    });
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
