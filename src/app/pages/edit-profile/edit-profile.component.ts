import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
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
    });
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
