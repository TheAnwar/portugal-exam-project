import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private user: UserService) {}
  login() {
    this.user.isLoggedIn.next(true);
    localStorage.setItem('login_token', 'true');
    this.router.navigate(['/home']);
  }
}
