import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-dg',
  templateUrl: './modality-dg.component.html',
  styleUrls: ['./modality-dg.component.scss'],
})
export class ModalityDgComponent {
  @Input() isSubmitted = false;
}
