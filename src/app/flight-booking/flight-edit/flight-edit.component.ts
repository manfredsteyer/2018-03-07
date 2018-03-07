import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExitComponent } from '../../shared/exit.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ExitComponent {
  id: string;
  showDetails: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  private sender: Observer<boolean>;
  private showWarning: boolean = false;

  decide(decision: boolean): void {
    this.sender.next(decision);
    this.sender.complete();
    this.showWarning = false;
  }

  canExit(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    })
  }


}
