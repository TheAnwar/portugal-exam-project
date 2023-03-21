import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ra',
  templateUrl: './ra.component.html',
  styleUrls: ['./ra.component.scss'],
})
export class RaComponent {
  @Input() type = 'short';

  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  show = false;

  showToggle() {
    this.show = !this.show;
  }

  answer = '';

  setValidity() {
    // if justification and at least one answer is filled set validity to true
    if (this.answer) {
      this.isValid.emit(true);
    }
  }
}
