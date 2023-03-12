import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-em',
  templateUrl: './em.component.html',
  styleUrls: ['./em.component.scss'],
})
export class EmComponent {
  @Input() isSubmitted = false;
}
