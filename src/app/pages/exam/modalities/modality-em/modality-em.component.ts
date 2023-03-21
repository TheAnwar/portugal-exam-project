import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-em',
  templateUrl: './modality-em.component.html',
  styleUrls: ['./modality-em.component.scss'],
})
export class ModalityEmComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  questions = [
    {
      id: '1',
      title:
        '(A) No seculo passado, a Fundacao Nobel ____________ dois premios a Marie Curie',
      options: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
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
    this.isValid.emit(true);
  }

  show = false;

  showToggle() {
    this.show = !this.show;
  }
}
