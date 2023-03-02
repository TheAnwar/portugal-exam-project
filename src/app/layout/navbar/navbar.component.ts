import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.SignOut();
    localStorage.removeItem('login_token');
    window.location.href = '/';
  }
}
