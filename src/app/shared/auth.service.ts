import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public userName: string = null;

    login(): void {
        this.userName = 'Max';
    }

    logout(): void {
        this.userName =  null;
    }

    constructor() { }

}