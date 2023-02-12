import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  routes = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Login',
      path: 'login',
    },
  ];
}
