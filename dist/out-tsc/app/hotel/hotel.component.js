var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChildren } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { CheckRoomsService } from '../services/check-rooms.service';
export var HotelComponent = (function () {
    function HotelComponent(getData, checkRooms) {
        this.getData = getData;
        this.checkRooms = checkRooms;
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData.getHotels().subscribe(function (data) {
            for (var i = data.length; i--; data[i].toggled = false) { }
            // console.log(data);
            _this.hotels = data;
        }, function (error) {
        });
        this.commonRating = new Array(5);
    };
    HotelComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        setTimeout(function () {
            _this.updateFilterQuont();
        }, 1);
    };
    HotelComponent.prototype.updateFilterQuont = function () {
        this.filteredHotelsQuont = this.filtredTemp.toArray().length;
    };
    HotelComponent.prototype.getRoom = function (event) {
        var currentEl = event.srcElement ? event.srcElement : event.target;
        while (currentEl.parentNode) {
            if (currentEl.classList.contains('rooms')) {
                this.checkRooms.toggleRoomStatus(this.hotels, currentEl.getAttribute('hotel_id'), currentEl.getAttribute('room_id'));
                return;
            }
            currentEl = currentEl.parentNode;
        }
    };
    __decorate([
        ViewChildren("filterredQuont"), 
        __metadata('design:type', Object)
    ], HotelComponent.prototype, "filtredTemp", void 0);
    HotelComponent = __decorate([
        Component({
            moduleId: 'module.id',
            selector: 'app-hotel',
            templateUrl: 'hotel.component.html',
            styleUrls: ['hotel.component.scss'],
            host: { '(click)': 'getRoom($event)' }
        }), 
        __metadata('design:paramtypes', [GetDataService, CheckRoomsService])
    ], HotelComponent);
    return HotelComponent;
}());
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/hotel/hotel.component.js.map