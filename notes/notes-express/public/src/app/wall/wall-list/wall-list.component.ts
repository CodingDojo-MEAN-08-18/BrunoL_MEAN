import { Component, OnDestroy } from '@angular/core';
import { Note } from '../../note'
import { NoteService } from '../../services/note.service'

//import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-wall-list',
  templateUrl: './wall-list.component.html',
  styleUrls: ['./wall-list.component.css']
})
export class WallListComponent implements OnDestroy {

  notes: Note[];
  subscription: Subscription;

  constructor(public _noteService: NoteService) {
    this.subscription = this._noteService.getNotes().subscribe(
        response => {
          this.notes = response;
          //console.log('getNotes subscription response', response);
        }
        );
  };

  /*ngOnInit() {

  }*/

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }

}
