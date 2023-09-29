import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWorkflowComponent } from './third-workflow.component';

describe('ThirdWorkflowComponent', () => {
  let component: ThirdWorkflowComponent;
  let fixture: ComponentFixture<ThirdWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdWorkflowComponent]
    });
    fixture = TestBed.createComponent(ThirdWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
