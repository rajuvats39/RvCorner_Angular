import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAsTagComponent } from './selector-as-tag.component';

describe('SelectorAsTagComponent', () => {
  let component: SelectorAsTagComponent;
  let fixture: ComponentFixture<SelectorAsTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorAsTagComponent]
    });
    fixture = TestBed.createComponent(SelectorAsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
