import { Component, OnInit, ViewChildren, AfterViewChecked } from '@angular/core';

import { GetDataService } from '../services/get-data.service';
import { CheckRoomsService } from '../services/check-rooms.service';

import { Hotel } from '../common_classes/hotel';

@Component({
  moduleId: 'module.id',
  selector: 'app-hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.scss'],
    host: { '(click)': 'getRoom($event)' }
})


export class HotelComponent implements OnInit,  AfterViewChecked {

  constructor( private getData: GetDataService, private checkRooms: CheckRoomsService ) { }

  @ViewChildren("filterredQuont") filtredTemp;

    filteredHotelsQuont: number;

  hotels: Hotel[];
  commonRating: any[];

  ngOnInit() {
    this.getData.getHotels().subscribe(data => {
        for (let i = data.length; i--; data[i].toggled = false){}
            // console.log(data);
            this.hotels = data;
        },
        error => {
        });

      this.commonRating  =  new Array(5);

  }

  ngAfterViewChecked() {
      setTimeout(()=>{
          this.updateFilterQuont()
      }, 1)
  }

  updateFilterQuont() {
      this.filteredHotelsQuont = this.filtredTemp.toArray().length;
  }

    getRoom(event) {
        let currentEl = event.srcElement ? event.srcElement : event.target;
        while (currentEl.parentNode){
            if (currentEl.classList.contains('rooms')){
                this.checkRooms.toggleRoomStatus(this.hotels, currentEl.getAttribute('hotel_id'), currentEl.getAttribute('room_id'));
                return
            }
            currentEl = currentEl.parentNode;
        }
    }
}
