import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ra',
  templateUrl: './ra.component.html',
  styleUrls: ['./ra.component.scss'],
})
export class RaComponent {
  @Input() type = 'short';

  @Input() isSubmitted = false;
}
