import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
  submitted: boolean = false;
  isValid: boolean = false;

  constructor(private router: Router) {}

  navigateModality(direction: 'next' | 'prev') {
    this.submitted = false;
    this.isValid = false;
    const currentIndex = this.currentModalityIndex;
    const nextIndex =
      direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex < 0 || nextIndex >= this.modalities.length) {
      return;
    }

    this.currentModality = this.modalities[nextIndex].code;
  }

  // click event on right and left arrow to navigate
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // hold shift
    if (!event.altKey) {
      return;
    }

    if (event.key === 'ArrowRight') {
      this.navigateModality('next');
    } else if (event.key === 'ArrowLeft') {
      this.navigateModality('prev');
    }
  }

  get currentModalityIndex() {
    return this.modalities.findIndex((m) => m.code === this.currentModality);
  }

  setValidity(isValid: any) {
    this.isValid = !!isValid;
  }

  submitQuestion() {
    console.log('submitted');
    this.submitted = true;
  }

  endExam() {
    this.router.navigateByUrl('/exam/choose');
  }
}
