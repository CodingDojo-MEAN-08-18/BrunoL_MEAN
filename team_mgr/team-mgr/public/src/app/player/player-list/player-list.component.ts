import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../../models/player'
import { PlayerService } from '../../services/player.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {

  players: Player[];
  subscription: Subscription;

  constructor(private _playerService: PlayerService) {
    this.subscription = this._playerService.getPlayers()
      .subscribe(response => {
        console.log('get players returned response', response);
        this.players = response
      })
   }

  ngOnInit() {
    //console.log('playerlist ngOnInit running')
    //console.log('this.players', this.players);
    this._playerService.getPlayers()
      .subscribe(response => {
        console.log('get players returned response', response);
        this.players = response
      })
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }

}
