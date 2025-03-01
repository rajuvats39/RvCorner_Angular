import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadingSpinnerComponent } from './page-loading-spinner.component';

describe('SpinnerComponent', () => {
  let component: PageLoadingSpinnerComponent;
  let fixture: ComponentFixture<PageLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLoadingSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
