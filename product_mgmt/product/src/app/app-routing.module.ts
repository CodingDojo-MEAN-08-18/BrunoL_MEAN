import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavComponent } from './nav/nav.component'
import { ProductComponent } from './product/product.component'
import { ListComponent } from './product/list/list.component'
import { CreateComponent } from './product/create/create.component'
import { EditComponent } from './product/edit/edit.component'

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'full',
    component: NavComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        pathMatch: 'full',
        redirectTo: 'products/list' // mwuahaha
      },
      {
        path: 'products',
        component: ProductComponent,
        //redirectTo: 'products/list',
        children: [
          {
            path: 'list',
            component: ListComponent
          },
          {
            path: 'create',
            component: CreateComponent
          },
          {
            path: 'edit/:id',
            component: EditComponent
          }
        ]
      },

  ]
},
  {
    path: "**",
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
