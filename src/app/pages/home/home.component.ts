import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = [
    {
      name: 'Português',
      icon: '/assets/images/subjects/1.png',
      selected: true,
    },
    {
      name: 'Matemática A',
      icon: '/assets/images/subjects/2.png',
      selected: true,
    },
    {
      name: 'História',
      icon: '/assets/images/subjects/3.png',
      selected: false,
    },
    {
      name: 'Biologia e Geologia',
      icon: '/assets/images/subjects/4.png',
      selected: false,
    },
    {
      name: 'Geografia',
      icon: '/assets/images/subjects/5.png',
      selected: false,
    },
    {
      name: 'Filosofia',
      icon: '/assets/images/subjects/6.png',
      selected: false,
    },
    {
      name: 'Economia A',
      icon: '/assets/images/subjects/7.png',
      selected: false,
    },
    {
      name: 'Física e Química A',
      icon: '/assets/images/subjects/8.png',
      selected: false,
    },
  ];

  constructor() {}

  selectCard(index: number) {
    this.cards[index].selected = !this.cards[index].selected;
  }
}
