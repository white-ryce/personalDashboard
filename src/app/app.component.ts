import {transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  style,animate
} from '@angular/animations';
import { fader } from './app-routing.module';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit{

  prepareRoute(outlet: RouterOutlet)
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  } 

  dateTime: Date

  ngOnInit(): void 
  {
     timer(0,1000).subscribe(() => {
      this.dateTime = new Date()
     })
  }
}
