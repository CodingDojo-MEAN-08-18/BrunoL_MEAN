import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { StatusGameComponent } from './status/status-game/status-game.component';

import { PlayerService } from './services/player.service';
import { RsvpService } from './services/rsvp.service';
import { GameService } from './services/game.service';

console.log('StatusGameComponent',StatusGameComponent);
console.log('StatusComponent',StatusComponent);

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StatusComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    StatusGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayerService, RsvpService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
