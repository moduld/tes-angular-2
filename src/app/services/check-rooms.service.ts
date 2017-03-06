import { Injectable } from '@angular/core';

@Injectable()
export class CheckRoomsService {

  constructor() { }

  toggleRoomStatus(data: any[], hotel_id: string, room_id: string) {
    data.forEach((item)=>{
      if (item.hotel_id === Number(hotel_id)){
        let counter = 0;
        item.rooms.forEach((room)=>{
          room.choosen && counter++;
          if (room.room_id === Number(room_id)){
            room.choosen = !room.choosen;
            room.choosen ? counter++ : counter--;
          }
        });
           item.choosen = !!counter;
      }
    })
  }

}
