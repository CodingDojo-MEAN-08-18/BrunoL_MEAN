import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Game } from '../models/game';

@Injectable()
export class GameService {
  baseurl: string = 'http://localhost:80/api/games';

  games: Game[];
  gameSubject = new BehaviorSubject<Game[]>(this.games);

  constructor(private _http: Http) {
    this.refreshGames();
   }

  refreshGames(): void{
    let url = this.baseurl;
    console.log('GETTING', url);
    this._http.get(url)
      .subscribe(response => {
        this.games = response.json();
        this.gameSubject.next(this.games);
        console.log('refreshed games')
      })
  }


  getGames(): Game[]{
    this.refreshGames();
    return this.gameSubject.getValue();
  }


  createGame(game: Game): void{
    let url = this.baseurl ;

    console.log('POSTING', url);
    this._http.post(url, game)
      .subscribe(
        newGame => {
          console.log('created game successfully', newGame);
          this.refreshGames();// after adding a game we refresh the list
        },
        err => {console.log('error creating game', err)}
        )
  }

  deleteGame(game: Game): void{
    let url = this.baseurl + '/' + game['_id'];

    console.log('DELETING', url);
    this._http.delete(url)
      .subscribe(
        removedGame => {
          console.log('deleted game successfully', removedGame);
          this.refreshGames();// after adding a game we refresh the list
        },
        err => {console.log('error deleting game', err)}
        )
  }

}
