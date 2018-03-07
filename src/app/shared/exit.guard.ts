import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FlightEditComponent } from '../flight-booking/flight-edit/flight-edit.component';
import { Observable } from 'rxjs/Observable';

export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable()
export class ExitGuard implements CanDeactivate<ExitComponent>  {

    canDeactivate(
        component: ExitComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): Observable<boolean> {
            return component.canExit();
        }
}