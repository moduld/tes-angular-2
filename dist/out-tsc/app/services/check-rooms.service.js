var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var CheckRoomsService = (function () {
    function CheckRoomsService() {
    }
    CheckRoomsService.prototype.toggleRoomStatus = function (data, hotel_id, room_id) {
        data.forEach(function (item) {
            if (item.hotel_id === Number(hotel_id)) {
                var counter_1 = 0;
                item.rooms.forEach(function (room) {
                    room.choosen && counter_1++;
                    if (room.room_id === Number(room_id)) {
                        room.choosen = !room.choosen;
                        room.choosen ? counter_1++ : counter_1--;
                    }
                });
                item.choosen = !!counter_1;
            }
        });
    };
    CheckRoomsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], CheckRoomsService);
    return CheckRoomsService;
}());
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/services/check-rooms.service.js.map