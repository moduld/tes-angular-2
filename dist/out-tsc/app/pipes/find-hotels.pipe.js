var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
export var FindHotelsPipe = (function () {
    function FindHotelsPipe() {
    }
    FindHotelsPipe.prototype.transform = function (value, name) {
        if (name) {
            return value.filter(function (hotel) {
                console.log(hotel.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
                return hotel.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
            });
        }
        else {
            return value;
        }
    };
    FindHotelsPipe = __decorate([
        Pipe({
            name: 'findHotels'
        }), 
        __metadata('design:paramtypes', [])
    ], FindHotelsPipe);
    return FindHotelsPipe;
}());
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/pipes/find-hotels.pipe.js.map