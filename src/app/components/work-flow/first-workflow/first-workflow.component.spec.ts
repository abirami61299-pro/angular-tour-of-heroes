import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWorkflowComponent } from './first-workflow.component';

describe('FirstWorkflowComponent', () => {
  let component: FirstWorkflowComponent;
  let fixture: ComponentFixture<FirstWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstWorkflowComponent]
    });
    fixture = TestBed.createComponent(FirstWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
