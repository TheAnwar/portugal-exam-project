import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ra3',
  templateUrl: './ra3.component.html',
  styleUrls: ['./ra3.component.scss'],
})
export class Ra3Component {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  answer = '';

  setValidity() {
    // if justification and at least one answer is filled set validity to true
    if (this.answer) {
      this.isValid.emit(true);
    }
  }
}
