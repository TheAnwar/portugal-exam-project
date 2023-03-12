import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-emj',
  templateUrl: './modality-emj.component.html',
  styleUrls: ['./modality-emj.component.scss'],
})
export class ModalityEmjComponent {
  @Input() isSubmitted = false;

  questions = [
    {
      id: '1',
      title:
        '(A) No seculo passado, a Fundacao Nobel ____________ dois premios a Marie Curie',
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

  show = false;

  showToggle() {
    this.show = !this.show;
  }
}
