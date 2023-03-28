import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-emm',
  templateUrl: './modality-emm.component.html',
  styleUrls: ['./modality-emm.component.scss'],
})
export class ModalityEmmComponent {
  @Input() isMultiple = false;
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  questions = [
    {
      id: '1',
      title:
        '(A) No seculo passado, a Fundacao Nobel ____________ dois premios a Marie Curie',
      options: ['ans 1', 'ans 2', 'ans 3 '],
    },
    {
      id: '2',
      title: 'lorem ipsum?',
      options: ['ans 1', 'ans 2', 'ans 3 '],
    },
    {
      id: '3',
      title: 'this is question 2',
      options: ['ans 1', 'ans 2', 'ans 3 '],
    },
  ];

  answers: any = {};

  correctAns: any = {
    '1': [0, 1],
    '2': [2],
    '3': [1],
  };

  setAnswer(qid: any, oidx: number) {
    if (this.answers[qid]) {
      // before adding check if the answer is already present
      if (this.answers[qid].includes(oidx)) {
        this.answers[qid] = this.answers[qid].filter((a: any) => a !== oidx);
      } else {
        this.answers[qid].push(oidx);
      }
    } else {
      this.answers[qid] = [oidx];
    }
    this.isValid.emit(true);
  }

  isCorrect(qid: any, oidx: number) {
    if (this.isSubmitted && this.correctAns[qid]) {
      return this.correctAns[qid].includes(oidx);
    }
    return false;
  }

  isWrong(qid: any, oidx: number) {
    if (this.isSubmitted && this.correctAns[qid]) {
      return (
        !this.correctAns[qid].includes(oidx) &&
        this.answers[qid]?.includes(oidx)
      );
    }
    return false;
  }
}
