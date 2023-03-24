import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modality-eq',
  templateUrl: './modality-eq.component.html',
  styleUrls: ['./modality-eq.component.scss'],
})
export class ModalityEqComponent {
  @ViewChild('editableArea', { static: true }) editableArea: any;

  @Input() isSubmitted = false;
  @Output() isValid = new EventEmitter<boolean>();

  answer = '';

  ngOnInit() {
    console.log(this.editableArea);
    this.isValid.emit(true);
  }

  onAnswerChange(e: EventTarget | null) {
    console.log(e);
  }

  onAddScript(s: 'sub' | 'sup') {
    const selection = window.getSelection();
    if (!selection) {
      alert('Please select some text');
      return;
    }
    const range = selection.getRangeAt(0);
    const newNode = document.createElement(s);

    newNode.textContent = selection.toString();
    range.deleteContents();
    range.insertNode(newNode);

    selection.removeAllRanges();
    selection.addRange(range);

    // add span after the new node
    // const span = document.createElement('span');
    // span.textContent = ' ';
    // newNode.after(span);
    // selection.collapse(span, 0);
  }
}
