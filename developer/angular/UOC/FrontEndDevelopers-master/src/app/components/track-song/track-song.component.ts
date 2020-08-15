import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../clases/song';

@Component({
  selector: 'app-track-song',
  templateUrl: './track-song.component.html',
  styleUrls: ['./track-song.component.css']
})
export class TrackSongComponent implements OnInit {
  
  @Input() song:Song;
  @Input() valuePlayedTime:number;
  @Input() audio:HTMLAudioElement;
  
  //usamos función del padre
  @Output() refreshTimePlayed: EventEmitter<any> = new EventEmitter<any>();

  resetTrack = true;

  constructor() { 
  }

  ngOnInit() {
  }

  percentToSeconds(event: any){
    let percentPlayed = event.value,
        duration = this.audio.duration,
        totalSeconds =  (percentPlayed * duration) / 100;
    this.refreshTimePlayed.emit(totalSeconds);
  }

}
