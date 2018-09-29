import { Injectable, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Player } from '../models/player';



@Injectable()
export class PlayerService {
  baseurl: string = 'http://localhost:80/api/players';
  // playerSubject = new Subject<Player[]>();
  players: Player[];
  playerSubject = new BehaviorSubject<Player[]>(this.players);
  constructor(private _http: Http) {
    this.refreshPlayers();
  }


  refreshPlayers(): void{
    let url = this.baseurl;
    console.log('GETTING', url);
    this._http.get(url)
      .subscribe(response => {
        this.players = response.json();
        this.playerSubject.next(this.players);
        console.log('refreshed players')
      })
  }

  getPlayers(): Observable<Player[]>{

    this.refreshPlayers();
    return this.playerSubject.asObservable();
  }


  createPlayer(player: Player): void{
    let url = this.baseurl ;

    console.log('POSTING', url);
    this._http.post(url, player)
      .subscribe(
        newPlayer => {
          console.log('created player successfully', newPlayer);
          this.refreshPlayers();// after adding a player we refresh the list
        },
        err => {console.log('error creating player', err)}
        )
  }

  ngOnInit(){
    //this.refreshPlayers();
  }
}
