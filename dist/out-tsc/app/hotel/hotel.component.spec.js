import { async, TestBed, inject } from '@angular/core/testing';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { HotelComponent } from './hotel.component';
import { GetDataService } from '../services/get-data.service';
describe('HotelComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HotelComponent, PerfectScrollbarModule],
            providers: [GetDataService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HotelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should ...', inject([GetDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/hotel/hotel.component.spec.js.map