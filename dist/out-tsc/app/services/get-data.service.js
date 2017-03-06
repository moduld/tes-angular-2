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
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
export var GetDataService = (function () {
    function GetDataService(http) {
        this.http = http;
    }
    GetDataService.prototype.getHotels = function () {
        return this.http.get('./data/data.json').map(function (resp) {
            return resp.json();
        }).catch(function (error) { return Observable.throw(error); });
    };
    GetDataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], GetDataService);
    return GetDataService;
}());
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/services/get-data.service.js.map