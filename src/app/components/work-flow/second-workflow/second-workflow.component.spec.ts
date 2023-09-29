import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWorkflowComponent } from './second-workflow.component';

describe('SecondWorkflowComponent', () => {
  let component: SecondWorkflowComponent;
  let fixture: ComponentFixture<SecondWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondWorkflowComponent]
    });
    fixture = TestBed.createComponent(SecondWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
