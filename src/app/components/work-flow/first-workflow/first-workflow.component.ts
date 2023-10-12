import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { zoomInAnimation } from 'angular-animations';

@Component({
  selector: 'first-workflow',
  templateUrl: './first-workflow.component.html',
  styleUrls: ['./first-workflow.component.scss'],
  animations: [zoomInAnimation()],
})
export class FirstWorkflowComponent implements OnChanges {
  @Output() onNext = new EventEmitter();
  @Input() appId = '';
  @Input() gameId = '';
  @Input() userId = '';
  stringified = '';
  step = 0;
  content: any;
  isCopied = false;
  constructor() {
    console.log(this.content);
  }

  ngOnChanges(): void {
    this.content = {
      gamification: {
        userId: this.userId,
        gameId: this.gameId,
        applicationId: this.appId,
      },
    };
    this.stringified = JSON.stringify(this.content).slice(1, -1);
  }
  setStep(tab: number) {
    this.step = tab;
  }
  onnext() {
    this.onNext.emit(2);
  }
  animate() {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 200);
  }
}
