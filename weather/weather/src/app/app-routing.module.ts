import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component'
import { CityComponent } from './city/city.component'

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'full',
    component: NavComponent,
    children:[ {path: ':city', component: CityComponent} ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
