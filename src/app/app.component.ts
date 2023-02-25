import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exam';

  constructor(private user: UserService) {
    console.log('AppComponent constructor');
    const isLogged = localStorage.getItem('login_token') ? true : false;

    if (isLogged) {
      this.user.isLoggedIn.next(true);
    }
  }
}
