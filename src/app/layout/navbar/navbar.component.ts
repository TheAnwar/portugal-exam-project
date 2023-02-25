import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  routes = [
    {
      name: 'Dashboard',
      path: 'dashboard',
    },
  ];

  constructor(private user: UserService) {}

  logout() {
    this.user.isLoggedIn.next(false);
    localStorage.removeItem('login_token');
    window.location.href = '/';
  }
}
