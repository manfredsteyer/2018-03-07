/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExitService } from './exit.service';

describe('Service: Exit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitService]
    });
  });

  it('should ...', inject([ExitService], (service: ExitService) => {
    expect(service).toBeTruthy();
  }));
});