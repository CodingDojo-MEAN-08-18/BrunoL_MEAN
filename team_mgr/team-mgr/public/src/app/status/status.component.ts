import { Component, OnInit, OnDestroy } from '@angular/core';
import { RsvpService } from '../services/rsvp.service';
import { GameService } from '../services/game.service';
import { PlayerService } from '../services/player.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Rsvp } from '../models/rsvp';
import { Game } from '../models/game';
import { Player } from '../models/player';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy {

  game_num: Number;
  game: Game;

  players: Player[];
  games: Game[];
  rsvps: Rsvp[];
  all_rsvps: Rsvp[];// all possible combinations, including those not in the db

  superSubscription: Subscription;

  rsvpSubscription: Subscription;
  gameSubscription: Subscription;
  playerSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
    private _rsvpService: RsvpService,
    private _gameService: GameService,
    private _playerService: PlayerService) {

    this.games = this._gameService.getGames();

    console.log('this.games', this.games);
     this.superSubscription =
        Observable.zip(
          this._route.paramMap,
          this._rsvpService.getRsvps(),
          //this._gameService.getGames(),
          this._playerService.getPlayers(),
         // (rsvps: Rsvp[], games: Game[], players: Player[]) => {this.rsvps, this.games, this.players}
        ).subscribe( ([params, rsvps,  players]) => {
            console.log('super response: params', params);
            console.log('super response: rsvps', rsvps);
            //console.log('super response: games', games);
            console.log('super response: players', players);
            this.game_num = parseInt(params.get('id'));
            //this.games = games;
            this.rsvps = rsvps;
            this.players = players;
            //this.game = this.games.filter(game => {return game.num==this.game_num})[0]
            //this.rsvps = this.rsvps.filter(rsvp=> {return rsvp.game==this.game['_id']});
            console.log('this.game', this.game);
          }
        )
   }

  ngOnInit() {

  }

  generateGame(){
    let num = this.games.length + 1;
    this._gameService.createGame(new Game(num));

  }
  deleteGames(){
    for(let game of this.games){
      this._gameService.deleteGame(game);
    }
    // todo: also delete all rsvps's
  }

  ngOnDestroy(){
    this.superSubscription.unsubscribe();
  }
}
