import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modality-dd',
  templateUrl: './modality-dd.component.html',
  styleUrls: ['./modality-dd.component.scss'],
})
export class ModalityDdComponent {
  isSubmitted = false;

  leftItems = [
    'I - The Phantom Menace _______',
    'II - Attack of the ______ Clones',
    'III - Revenge of _______ the Sith',
    'IV - A New Hope _______',
  ];

  original = [
    'V - The Empire Strikes Back lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, lorem ipsum',
    'VI - Return of the Jedi',
    'VII - The Force Awakens',
    'VIII - The Last Jedi',
  ];

  sorted: string[] = [...this.original];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sorted, event.previousIndex, event.currentIndex);
  }

  reset() {
    this.sorted = [...this.original];
  }

  submit() {
    this.isSubmitted = true;
  }
}
