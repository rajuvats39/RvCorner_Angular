import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationsComponent } from './component-communications.component';

describe('ComponentCommunicationsComponent', () => {
  let component: ComponentCommunicationsComponent;
  let fixture: ComponentFixture<ComponentCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentCommunicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
