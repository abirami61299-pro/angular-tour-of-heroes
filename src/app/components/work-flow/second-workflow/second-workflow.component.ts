import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'second-workflow',
  templateUrl: './second-workflow.component.html',
  styleUrls: ['./second-workflow.component.scss'],
})
export class SecondWorkflowComponent {
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
  onnext(tab: number) {
    this.onNext.emit(tab);
  }
}
