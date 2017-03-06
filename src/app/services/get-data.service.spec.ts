/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDataService } from './get-data.service';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Hotel } from '../common_classes/hotel';

describe('Service: GetDataService', () => {
  let service: GetDataService;
  let hotels: Array<Hotel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, Http],
      providers: [GetDataService]
    });
  });

  it('should return array of hotels', () => {
    expect(service.getHotels()).toEqual(hotels)});

});
