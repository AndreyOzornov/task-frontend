import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Smartwatch} from '../../app/models/smartwatch';

import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class SmartwatchService {
  private smartwatchsUrl = 'http://localhost:3000/smartwatches';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getSmartwatches(): Observable<Smartwatch[]> {
    const url = `${this.smartwatchsUrl}`;
    return this.http.get(url)
      .catch(this.handleError);
  }


  private handleError(error: HttpResponse<any> | any) {
    return Observable.throw(error._body);
  }
}
