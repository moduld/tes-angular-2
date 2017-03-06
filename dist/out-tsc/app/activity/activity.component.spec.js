import { async, TestBed } from '@angular/core/testing';
import { ActivityComponent } from './activity.component';
describe('ActivityComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ActivityComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Repositories/test_ang/testapp/src/app/activity/activity.component.spec.js.map