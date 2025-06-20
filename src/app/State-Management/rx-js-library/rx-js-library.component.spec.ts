import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsLibraryComponent } from './rx-js-library.component';

describe('RxJsLibraryComponent', () => {
  let component: RxJsLibraryComponent;
  let fixture: ComponentFixture<RxJsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxJsLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
