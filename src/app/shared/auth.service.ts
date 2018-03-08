import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {

    constructor(private oauthService: OAuthService) {
    }

    public get userName(): string {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name']; // OIDC
    }

    login(): void {
        this.oauthService.initImplicitFlow();
    }

    logout(): void {
        this.oauthService.logOut();
    }

}