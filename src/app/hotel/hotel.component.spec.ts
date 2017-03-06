/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { GetDataService } from '../services/get-data.service';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ HotelComponent, PerfectScrollbarModule ],
      providers: [GetDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ...', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
