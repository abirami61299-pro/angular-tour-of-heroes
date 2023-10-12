import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fourth-workflow',
  templateUrl: './fourth-workflow.component.html',
  styleUrls: ['./fourth-workflow.component.scss'],
})
export class FourthWorkflowComponent {
  @Output() onNext = new EventEmitter();
  step = 0;

  setStep(tab: number) {
    this.step = tab;
  }
  onnext(tab = 1) {
    this.onNext.emit(tab);
  }
}
