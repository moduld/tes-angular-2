/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { GetDataService } from './get-data.service';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
describe('Service: GetDataService', function () {
    var service;
    var hotels;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [HttpModule, Http],
            providers: [GetDataService]
        });
    });
    it('should return array of hotels', function () {
        expect(service.getHotels()).toEqual(hotels);
    });
});
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/services/get-data.service.spec.js.map