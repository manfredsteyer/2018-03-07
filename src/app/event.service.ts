import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Flight } from './entities/flight';

@Injectable()
export class EventService {

    private flightSelectedSubject = new ReplaySubject<Flight>(3);
    // private flight: Flight;
    public flightSelected$ = this.flightSelectedSubject.asObservable();

    constructor() { }

    public flightSelected(f: Flight) {
        if (!f) throw new Error("null is not supported");
        // this.flight = f;
        this.flightSelectedSubject.next(f);
    }

}