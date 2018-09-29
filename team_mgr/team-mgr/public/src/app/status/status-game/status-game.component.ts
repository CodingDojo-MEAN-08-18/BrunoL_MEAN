import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Rsvp } from '../../models/rsvp';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-status-game',
  templateUrl: './status-game.component.html',
  styleUrls: ['./status-game.component.css']
})
export class StatusGameComponent implements OnInit {

  @Input() rsvps: Rsvp[];
  @Input() game_num: Number;

  constructor( ) {



   }

  ngOnInit() {

    console.log('status-game ngOnInit');
  }

}
