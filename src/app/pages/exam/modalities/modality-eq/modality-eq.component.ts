import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';

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
  correctAnswer = 'This is a <sup>abc</sup> and this is a <sub>def</sub>';

  ngOnInit() {
    console.log(this.editableArea);
    this.isValid.emit(true);

    if (!environment.production) {
      this.answer =
        'This is a <sup contenteditable="false">superscript</sup> and this is a <sub contenteditable="false">subscript</sub>';
    }
  }

  onAddScript(s: 'sub' | 'sup') {
    const selection = window.getSelection();
    if (!selection) {
      alert('Please select some text');
      return;
    }
    const range = selection.getRangeAt(0);
    const newNode = document.createElement(s);

    // add span as sibilings of the new node
    const span = document.createElement('span');
    span.textContent = ' ';
    newNode.after(span);

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

  onAnswerChange(e: KeyboardEvent | null) {
    e?.preventDefault();
    // console.log(e);
    if (e?.key === 'ArrowRight') {
      const selection = window.getSelection();
      if (!selection) {
        return;
      }

      // check if caret in the last position
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      const offset = range.startOffset;
      if (node.nodeType === Node.TEXT_NODE) {
        if (offset === node.textContent?.length) {
          // add span inside the e.target
          const span = document.createElement('span');
          const empty = document.createTextNode('\uFEFF');
          span.appendChild(empty);
          (e.target as HTMLElement).appendChild(span);
        }
      }
    }
  }
}
