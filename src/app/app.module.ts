import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheltersModule } from './shelters/shelters.module';
import { LoginModule } from './login/login.module';
import { RegistrationUserModule } from './registration-user/registration-user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { DonationModule } from './donation/donation.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateInterceptor } from './shared/authenticate.interceptor';
import { NotifyModule } from './notify/notify.module';

const interceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthenticateInterceptor
};

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SheltersModule,
    MatButtonModule,
    LoginModule,
    RegistrationUserModule,
    DonationModule,
    AdminUsersModule,
    NotifyModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
