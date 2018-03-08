import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExitComponent } from '../../shared/exit.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ExitComponent {
  id: string;
  showDetails: string;

  formGroup: FormGroup;

  metaData = [
    {
      label: 'Flight Id',
      name: 'id',
      // control: 'input', 'date'
    },
    {
      label: 'Airport of Departure',
      name: 'from',
      // control: 'input', 'date'
    },
    {
      label: 'Airport of Destination',
      name: 'to',
      // control: 'input', 'date'
    },
    {
      label: 'Boarding Time',
      name: 'date',
      // control: 'input', 'date'
    }

  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.formGroup = this.fb.group({
      id: [],
      from: [null, [Validators.required]],
      to: [],
      date: []
    });

    this.formGroup.valueChanges.subscribe(v => {
      console.debug('value changes', v);
    });

  }

  save(): void {
    console.debug('form', this.formGroup.value)
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
