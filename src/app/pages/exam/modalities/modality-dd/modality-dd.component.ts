import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-dd',
  templateUrl: './modality-dd.component.html',
  styleUrls: ['./modality-dd.component.scss'],
})
export class ModalityDdComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  leftItems = [
    'I - The Phantom Menace _______',
    'II - Attack of the ______ Clones',
    'III - Revenge of _______ the Sith',
    'IV - A New Hope _______',
  ];

  original = [
    {
      id: 1,
      text: 'V - The Empire Strikes Back lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, lorem ipsum',
    },
    {
      id: 2,
      text: 'VI - Return of the Jedi',
    },
    {
      id: 3,
      text: 'VII - The Force Awakens',
    },
    {
      id: 4,
      text: 'VIII - The Last Jedi',
    },
  ];

  answers = [3, 2, 1, 4];

  sorted: any[] = [...this.original];

  ngOnInit() {
    this.isValid.emit(true);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.sorted, event.previousIndex, event.currentIndex);
  }

  reset() {
    this.sorted = [...this.original];
  }
}
