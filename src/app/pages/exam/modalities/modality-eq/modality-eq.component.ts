import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-eq',
  templateUrl: './modality-eq.component.html',
  styleUrls: ['./modality-eq.component.scss'],
})
export class ModalityEqComponent {
  @Input() isSubmitted = false;
}
