import { Injectable } from '@angular/core';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private oauthStorage: OAuthStorage) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.url.startsWith('http://www.angular.at/api')) {
            let headers = req.headers
                                .set('Authorization', 'Bearer ' +  this.oauthStorage.getItem('access_token'));
            
            req = req.clone({ headers });
        }
        // Alternative:
        // let newAlternativeReq = req.clone({ setHeaders: { 'Authorization': this.oauthService.authorizationHeader()} });

        return next.handle(req);
    }
}