import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-emi',
  templateUrl: './modality-emi.component.html',
  styleUrls: ['./modality-emi.component.scss'],
})
export class ModalityEmiComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  options = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
    { name: 'Option 3', value: 'option3' },
    { name: 'Option 4', value: 'option4' },
  ];

  yourAnswer!: number;

  correctAnswer = 2;

  setUserInput(i: number) {
    this.yourAnswer = i;
    this.isValid.emit(true);
  }
}
