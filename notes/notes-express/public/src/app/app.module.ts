import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { WallListComponent } from './wall/wall-list/wall-list.component';
import { WallCreateComponent } from './wall/wall-create/wall-create.component';

import { NoteService } from './services/note.service'
import { ErrorPipe } from './error.pipe'

// check if any are undefined
/*console.log('WallCreateComponent', WallCreateComponent);
console.log('WallListComponent', WallListComponent);
console.log('NoteService', NoteService);*/
@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    WallListComponent,
    WallCreateComponent,
    ErrorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
