import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'src/shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { IsLoggedDirective } from './is-logged.directive';
import { ForgetPassComponent } from './auth/forget-pass/forget-pass.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PaymentComponent,
    DashboardComponent,
    IsLoggedDirective,
    ForgetPassComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
