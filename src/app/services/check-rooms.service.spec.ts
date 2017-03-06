/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckRoomsService } from './check-rooms.service';

describe('CheckRoomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckRoomsService]
    });
  });

  it('should ...', inject([CheckRoomsService], (service: CheckRoomsService) => {
    expect(service).toBeTruthy();
  }));
});
