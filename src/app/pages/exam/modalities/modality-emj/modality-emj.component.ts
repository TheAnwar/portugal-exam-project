import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-emj',
  templateUrl: './modality-emj.component.html',
  styleUrls: ['./modality-emj.component.scss'],
})
export class ModalityEmjComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  questions = [
    {
      id: '1',
      title:
        '(A) No seculo passado, a Fundacao Nobel ____________ dois premios a Marie Curie',
      options: ['ans 1', 'ans 2', 'ans 3 '],
    },
  ];

  answers: any = {};
  justification: any = '';

  correctAns: any = {
    '1': 0,
    '2': 2,
    '3': 1,
  };

  setAnswer(qid: any, oidx: number) {
    this.answers[qid] = oidx;
    this.setValidity();
  }

  show = false;

  showToggle() {
    this.show = !this.show;
  }

  setValidity() {
    // if justification and at least one answer is filled set validity to true
    if (this.justification && Object.keys(this.answers).length > 0) {
      this.isValid.emit(true);
    }
  }
}
