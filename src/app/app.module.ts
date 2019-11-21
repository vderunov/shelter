import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheltersModule } from './shelters/shelters.module';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { DonationModule } from './donation/donation.module';
import { AuctionModule } from './auction/auction.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateInterceptor } from './shared/authenticate.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { NavbarModule } from './navbar/navbar.module';
import { MatSnackBarModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment.prod';
import { UserRegistrationModule } from './user-registration/user-registration.module';

const interceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthenticateInterceptor
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SheltersModule,
    MatButtonModule,
    LoginModule,
    UserRegistrationModule,
    DonationModule,
    AuctionModule,
    AdminUsersModule,
    NavbarModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places']
    }),
  ],
  providers: [
    interceptorProvider,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
