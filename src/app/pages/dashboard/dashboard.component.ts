import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isExisting = true;

  cards = [
    {
      name: 'Português',
      icon: '/assets/images/subjects/1.png',
      selected: false,
    },
    {
      name: 'Matemática A',
      icon: '/assets/images/subjects/2.png',
      selected: false,
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['isExisting'] === 'true') {
        this.isExisting = true;
      } else {
        this.isExisting = false;
      }
    });
  }

  selectCard(index: number) {
    this.cards[index].selected = !this.cards[index].selected;
  }
}
