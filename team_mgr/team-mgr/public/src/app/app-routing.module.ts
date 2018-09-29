import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { StatusComponent } from './status/status.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { StatusGameComponent } from './status/status-game/status-game.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players/list'
  },
  {
   path: 'players',
   component: PlayerComponent,
   children: [
     {
       path: 'list',
       component: PlayerListComponent
     },
     {
       path: 'create',
       component: PlayerCreateComponent
     }
   ]
  },

  {
   path: 'status/games',
   component: StatusComponent,
   pathMatch: 'full'
   /*children: [
     {
       path: 'games/:id',
       component: StatusGameComponent
     }
   ]*/
  },
  {
    path: 'status',
    pathMatch: 'full',
    redirectTo: '/status/games'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
