import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findHotels'
})
export class FindHotelsPipe implements PipeTransform {

  transform(value: any, name?: string): any {
    if (name){
     return  value.filter((hotel) => {
        console.log(hotel.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
        return hotel.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
      })
    } else {
      return value
    }
  }

}
