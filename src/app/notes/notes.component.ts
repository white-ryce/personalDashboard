import { Component } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent 
{
  notes: Note[]

  constructor(private noteService: NoteService)
  {

  }

  ngOnInit(): void
  {
    this.notes = this.noteService.getNotes()
  }
}
