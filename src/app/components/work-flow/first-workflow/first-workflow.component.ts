import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'first-workflow',
  templateUrl: './first-workflow.component.html',
  styleUrls: ['./first-workflow.component.scss'],
})
export class FirstWorkflowComponent {
  @Output() onNext = new EventEmitter();
  step = 0;
  content = {
    gamification: {
      userId: '6b40a8ec-6046-4fdf-8a07-9c5f8aba4e8a',
      gameId: '64c6645e7cb0ce6020901a71',
      applicationId: '64c6645b7cb0ce6020901a4e',
    },
  };
  constructor() {
    console.log(this.content);
  }

  setStep(tab: number) {
    this.step = tab;
  }
  onnext() {
    this.onNext.emit(2);
  }
}
