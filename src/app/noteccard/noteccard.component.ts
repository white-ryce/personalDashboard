import { Component, OnInit, Input} from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-noteccard',
  templateUrl: './noteccard.component.html',
  styleUrls: ['./noteccard.component.scss']
})
export class NoteccardComponent implements OnInit{

  @Input() note: Note

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

}
