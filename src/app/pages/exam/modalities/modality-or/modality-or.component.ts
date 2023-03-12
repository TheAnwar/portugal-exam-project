import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modality-or',
  templateUrl: './modality-or.component.html',
  styleUrls: ['./modality-or.component.scss'],
})
export class ModalityOrComponent {
  @Input() isSubmitted = false;

  original = [
    'I - The Phantom Menace',
    'II - Attack of the Clones',
    'III - Revenge of the Sith',
    'IV - A New Hope',
    'V - The Empire Strikes Back',
    'VI - Return of the Jedi',
    'VII - The Force Awakens',
    'VIII - The Last Jedi',
    'IX – The Rise of Skywalker',
  ];

  sorted: string[] = [...this.original];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sorted, event.previousIndex, event.currentIndex);
  }

  reset() {
    this.sorted = [...this.original];
  }
}
