import { Component, OnInit } from '@angular/core';
import { Note } from '../../note'
import { NoteService } from '../../services/note.service'

@Component({
  selector: 'app-wall-create',
  templateUrl: './wall-create.component.html',
  styleUrls: ['./wall-create.component.css']
})
export class WallCreateComponent implements OnInit {

  note: Note = new Note();
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  sendNewNote(e: Event){
    e.preventDefault();
    console.log("about to send this note", this.note);
    this._noteService.createNote(this.note);
  }
}
