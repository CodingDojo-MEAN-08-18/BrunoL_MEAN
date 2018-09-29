import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { DetailsComponent } from './product/details/details.component';

import { ProductService } from './product/product.service';
import { ListComponent } from './product/list/list.component'

import {ErrorPipe} from './error.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    ListComponent,
    ErrorPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
