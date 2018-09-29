import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player'
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player: Player = new Player();

  constructor(private _playerService: PlayerService,
    private _router: Router) { }

  ngOnInit() {
  }

  sendPlayer(e: Event){
    e.preventDefault();
    console.log("sending this player to the db", this.player);
    this._playerService.createPlayer(this.player);
    this._router.navigate(['/players/list']);
  }
}
