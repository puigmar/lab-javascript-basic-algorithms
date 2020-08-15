import { Component } from '@angular/core';

import { ContadorComponent} from './contador/contador.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  contador:number = 0;

  listenerContador($event:any):void {
    this.contador = $event;
  }
}
