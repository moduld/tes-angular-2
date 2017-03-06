import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomQuont'
})
export class RoomQuontPipe implements PipeTransform {

  transform(value: any, quont?: any, toggled?: any): any {

    return !toggled ? value.slice(0, quont) : value;

  }

}
