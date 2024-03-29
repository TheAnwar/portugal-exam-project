import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-vf',
  templateUrl: './modality-vf.component.html',
  styleUrls: ['./modality-vf.component.scss'],
})
export class ModalityVfComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  statements = [
    {
      text: 'The patient has a history of diabetes',
      ans: false,
    },
    {
      text: 'The patient has a history of hypertension',
      ans: false,
    },
    {
      text: 'The patient has a history of glaucoma',
      ans: false,
    },
    {
      text: 'The patient has a history of cataracts',
      ans: false,
    },
    {
      text: 'The patient has a history of macular degeneration',
      ans: false,
    },
  ];

  answers = [true, false, true, false, false];

  ngOnInit() {
    this.isValid.emit(true);
  }
}
