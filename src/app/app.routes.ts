import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassComponent } from './auth/forget-pass/forget-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoggedGuard } from './logged.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FireAuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'forget-password',
    canActivate: [LoggedGuard],
    component: ForgetPassComponent,
  },
  {
    path: 'register',
    canActivate: [LoggedGuard],
    component: RegisterComponent,
  },
  {
    path: '',
    canActivate: [FireAuthGuard],
    children: [
      {
        path: 'home',
        redirectTo: 'dashboard',
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'exam',
        loadChildren: () =>
          import('./pages/exam/exam.module').then((m) => m.ExamModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
