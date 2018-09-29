import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
//import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Note } from '../note';

@Injectable()
export class NoteService {

  base_url: string = 'http://localhost:80/api';
  noteSubject = new Subject<Note[]>();

  constructor(private _http: Http) {
    this.refreshNotes();
   }

  refreshNotes(): void{
    let url = this.base_url;

    this._http.get(url)
      .subscribe(response => {
         // propogate the new notes to all subscribers (components)
         this.noteSubject.next(response.json());
         console.log('refreshed notes');
       });
   ;
  }

  getNotes(): Observable<Note[]>{
    // this is what our list component will subscribe to
    return this.noteSubject.asObservable();
  }

  createNote(note: Note): void{
    let url = this.base_url;
    console.log('got note text from the form', note);

    this._http.post(url, note)
      .subscribe(
        newNote => {
          console.log('created note successfully', newNote);
          this.refreshNotes() // trigger to refresh notes
         },
        err => {console.log(err)} // TODO: nothing will happen if error hit...
        );
  }


}
