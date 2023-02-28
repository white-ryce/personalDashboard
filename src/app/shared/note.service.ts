import { Injectable } from '@angular/core';
import {Note} from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('Hi', 'bye'),
    new Note('Hi', 'bye')
  ];

  constructor() { }

  getNotes()
  {
    return this.notes
  }

  getNote(id:string)
  {
    const note = this.notes.find(n => n.id === id)
    return note
  }

  addNote(note: Note)
  {
    this.notes.push(note)
  }

  
  updateNote(id: string, updatedFields: Partial<Note>)
  {
    const note = this.getNote(id)
    Object.assign(note,updatedFields)
  }
  

  deleteNote(id: string)
  {
    const noteIndex = this.notes.findIndex(n => n.id === id)
    if(noteIndex == -1) return

    this.notes.splice(noteIndex, 1)
  }
}
