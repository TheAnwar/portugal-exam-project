import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modality-or',
  templateUrl: './modality-or.component.html',
  styleUrls: ['./modality-or.component.scss'],
})
export class ModalityOrComponent {
  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

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
    {
      id: 5,
      text: '10 - The Last Jedi',
    },
    {
      id: 6,
      text: '9 - The Last Jedi',
    },
    {
      id: 7,
      text: '7 - The Last Jedi',
    },
    {
      id: 8,
      text: '8 - The Last Jedi',
    },
  ];

  answers = [3, 2, 1, 4, 9, 8, 5, 6];

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
