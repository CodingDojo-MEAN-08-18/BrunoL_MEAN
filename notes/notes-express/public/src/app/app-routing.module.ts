import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component'
import { WallListComponent } from './wall/wall-list/wall-list.component'
import { WallCreateComponent } from './wall/wall-create/wall-create.component'

const routes: Routes = [
{
  path: '',
  pathMatch: 'full', //
  component: WallComponent
  /*children: [ // dont think subrouting is necessary. just have two components in wall.component.html
    {
      path: 'list',
      component: WallListComponent
    },
    {
      path: 'create',
      component: WallCreateComponent
    }
  ]*/
}/*,{
  path: '',
  pathMatch: 'full',
  redirectTo: 'wall'
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
