import { Component } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent {
  modalities = [
    { name: 'RA', code: 'ra' },
    { name: 'RA2', code: 'ra2' },
    { name: 'RA3', code: 'ra3' },
    { name: 'EM', code: 'em' },
    { name: 'EMI', code: 'emi' },
    { name: 'EMJ', code: 'emj' },
    { name: 'EMM', code: 'emm' },
    { name: 'OR', code: 'or' },
    { name: 'VF', code: 'vf' },
    { name: 'DG', code: 'dg' },
    { name: 'DD', code: 'dd' },
    { name: 'EQ', code: 'eq' },
  ];

  currentModality = 'emm';

  navigateModality(direction: 'next' | 'prev') {
    const currentIndex = this.modalities.findIndex(
      (m) => m.code === this.currentModality
    );
    const nextIndex =
      direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex < 0 || nextIndex >= this.modalities.length) {
      return;
    }

    this.currentModality = this.modalities[nextIndex].code;
  }

  get currentModalityIndex() {
    return this.modalities.findIndex((m) => m.code === this.currentModality);
  }

  endExam() {
    console.log('end exam');
  }
}
