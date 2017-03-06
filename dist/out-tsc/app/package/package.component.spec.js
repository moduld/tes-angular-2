import { async, TestBed } from '@angular/core/testing';
import { PackageComponent } from './package.component';
describe('PackageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PackageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/package/package.component.spec.js.map