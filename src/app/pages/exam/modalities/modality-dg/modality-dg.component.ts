import { Component } from '@angular/core';

@Component({
  selector: 'app-modality-dg',
  templateUrl: './modality-dg.component.html',
  styleUrls: ['./modality-dg.component.scss'],
})
export class ModalityDgComponent {
  isSubmitted = false;

  submit() {
    this.isSubmitted = true;
  }
}
