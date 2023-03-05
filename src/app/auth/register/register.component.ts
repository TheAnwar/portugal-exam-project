import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
      username: [''],
      password: [''],
    });

    if (!environment.production) {
      this.form.setValue({
        name: 'test',
        username: 'aib.tmkm@gmail.com',
        password: '123456',
      });
    }
  }

  login() {
    this.isLoading = true;
    const { username, password, name } = this.form.value;
    this.auth
      .SignUp(username, password, name)
      .then(() => {
        this.router.navigate(['dashboard']);
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
      });
  }
}
