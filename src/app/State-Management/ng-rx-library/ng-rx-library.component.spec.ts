import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxLibraryComponent } from './ng-rx-library.component';

describe('NgRxLibraryComponent', () => {
  let component: NgRxLibraryComponent;
  let fixture: ComponentFixture<NgRxLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgRxLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRxLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
