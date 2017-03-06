import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Hotel } from '../common_classes/hotel';

@Injectable()
export class GetDataService {

  constructor( private http: Http ) { }

  getHotels (): Observable <Hotel[]> {

    return this.http.get('./data/data.json').map((resp: Response) => {
        return resp.json()
        }).catch((error: any)=> { return Observable.throw(error);})
  }

}
