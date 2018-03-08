import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from "angular-oauth2-oidc";
import { authConfig } from './auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Manfred war hier!';

  constructor(private oauthService: OAuthService) {
    oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}

