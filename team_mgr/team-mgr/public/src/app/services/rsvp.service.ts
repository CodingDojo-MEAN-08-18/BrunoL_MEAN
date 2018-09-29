import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Rsvp } from '../models/rsvp';



@Injectable()
export class RsvpService {

  baseurl: string = 'http://localhost:80/api/rsvps';
  rsvpSubject = new Subject<Rsvp[]>();

  constructor(private _http: Http) {
    this.refreshRsvps();
  }

  refreshRsvps(): void{
    let url = this.baseurl;
    console.log('GETTING', url);
    this._http.get(url)
      .subscribe(response => {
        this.rsvpSubject.next(response.json());
        console.log('refreshed rsvps');
      })
  }

  getRsvps(): Observable<Rsvp[]>{
    this.refreshRsvps();
    return this.rsvpSubject.asObservable()
  }

  createRsvp(rsvp: Rsvp): void{
    let url = this.baseurl;

    console.log('POSTING', url);
    this._http.post(url, rsvp)
      .subscribe(
        newRsvp =>{
          console.log('created new Rsvp', newRsvp);
          this.refreshRsvps(); // update the subscribers to Rsvp
        },
        err => {console.log('error creating Rsvp', err)}
        )
  }


}
