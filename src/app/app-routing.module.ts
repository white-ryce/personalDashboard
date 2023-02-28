import { query, transition, trigger,style, animate } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: {animation: 'isLeft'}},
  { path: 'todos', component: TodosComponent, data: {animation: 'isCenter'}},
  { path: 'notes', component: NotesComponent, data: {animation: 'isRight'}},
  { path: 'notes/add', component: AddNoteComponent}
  /* With this animation style animation occurs when switching between different animation names*/
];

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *',[
      query(':enter,:leave',[
        style({
          position:'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      query(':enter',[
        animate('600ms ease',
          style({opacity: 1, transform: 'scale(1) translateY(0)'}))
      ])
    ])
  ]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
