import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-emi',
  templateUrl: './modality-emi.component.html',
  styleUrls: ['./modality-emi.component.scss'],
})
export class ModalityEmiComponent {
  options = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
    { name: 'Option 3', value: 'option3' },
    { name: 'Option 4', value: 'option4' },
  ];

  @Input() isSubmitted = false;

  yourAnswer!: number;

  correctAnswer = 2;

  setUserInput(i: number) {
    this.yourAnswer = i;
  }
}
