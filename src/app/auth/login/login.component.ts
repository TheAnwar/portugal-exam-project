import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  form!: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    const { username, password } = this.form.value;
    this.isLoading = true;
    this.auth.SignIn(username, password).then((res) => {
      this.isLoading = false;
    });
  }
}
