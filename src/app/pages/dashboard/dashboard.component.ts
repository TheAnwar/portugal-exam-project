import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

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
  user: User | null = null;

  constructor(private route: ActivatedRoute, public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });

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
