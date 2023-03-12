import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-emm',
  templateUrl: './modality-emm.component.html',
  styleUrls: ['./modality-emm.component.scss'],
})
export class ModalityEmmComponent {
  @Input() isSubmitted = false;

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
    '1': 0,
    '2': 2,
    '3': 1,
  };

  setAnswer(qid: any, oidx: number) {
    this.answers[qid] = oidx;
  }
}
