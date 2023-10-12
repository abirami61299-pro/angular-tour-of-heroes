import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWorkflowComponent } from './fourth-workflow.component';

describe('FourthWorkflowComponent', () => {
  let component: FourthWorkflowComponent;
  let fixture: ComponentFixture<FourthWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthWorkflowComponent]
    });
    fixture = TestBed.createComponent(FourthWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
