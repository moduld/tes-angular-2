import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { HotelComponent } from './hotel/hotel.component';
import { PackageComponent } from './package/package.component';

import { GetDataService } from './services/get-data.service';
import { CheckRoomsService } from './services/check-rooms.service';
import { RoomQuontPipe } from './pipes/room-quont.pipe';
import { FindHotelsPipe } from './pipes/find-hotels.pipe';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

let appRoutes: Routes =[
  { path: 'activity', component: ActivityComponent},
  { path: 'hotels', component: HotelComponent },
  { path: 'package', component: PackageComponent },
  { path: '', redirectTo: 'hotels', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    HotelComponent,
    PackageComponent,
    RoomQuontPipe,
    FindHotelsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [GetDataService, CheckRoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
