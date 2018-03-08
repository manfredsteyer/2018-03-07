import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";
import { EventService } from '../event.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
 

  flights: Flight[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.flightSelected$.subscribe(
      flight => {
        if (!flight) return;
        this.flights.unshift(flight);
        if (this.flights.length > 3) {
          this.flights.pop();
        }
      }
    )
  }

}
