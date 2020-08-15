import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
//para fire base
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebMusicApp';

  songs: Observable<any[]>;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    // llamamos el método getSongs del servicio de firebabse y lo
    // asignamos a songs, que es del tipo observable
    this.songs = this.firebaseService.getSongs()
  }

}
