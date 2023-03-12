import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-emj',
  templateUrl: './modality-emj.component.html',
  styleUrls: ['./modality-emj.component.scss'],
})
export class ModalityEmjComponent {
  @Input() isSubmitted = false;

  show = false;

  showToggle() {
    this.show = !this.show;
  }
}
