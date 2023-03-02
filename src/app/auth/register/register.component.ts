import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
    this.auth.SignUp(username, password);

    // this.router.navigate(['/payment'], { queryParams: { step: 1 } });
  }
}
