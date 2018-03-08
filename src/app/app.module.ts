import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { OAuthModule } from 'angular-oauth2-oidc';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
// import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from './shared/shared.module';
import { EventService } from './event.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    // FlightBookingModule, // Würde Lazy Loading verhindern!
    RouterModule.forRoot(
      APP_ROUTES,
      { preloadingStrategy: PreloadAllModules }
    ),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    EventService // Global
    // { provide: FlightService, useClass: FlightService}
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
