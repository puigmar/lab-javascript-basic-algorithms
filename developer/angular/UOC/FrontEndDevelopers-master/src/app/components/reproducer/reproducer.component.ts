import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { TrackSongComponent } from "../track-song/track-song.component";
import { Observable } from 'rxjs';
import { Song } from '../../clases/song';

@Component({
  selector: 'app-reproducer',
  templateUrl: './reproducer.component.html',
  styleUrls: ['./reproducer.component.css']
})
export class ReproducerComponent implements OnInit {

  @ViewChild(TrackSongComponent, {static: false}) tracksong:TrackSongComponent ;

  @Input() song: Song;

  audio: HTMLAudioElement;
  interval: NodeJS.Timer;
  valuePlayedTime:string;

  currentAudio = this.audio;
  stop = true;

  constructor() {
    this.toHumanTime(0);
  }

  ngOnInit() {
    this.valuePlayedTime = '00:00'
  }


  ngOnChanges() {
    if (this.song) {
      this.audio = new Audio();
      this.audio.src = this.song.audio_url;
      this.onPlay();
    }
  }

  onPlay() {
    this.audio.play();
    this.interval = setInterval(function () {
      //do nothing. this just keeps the bar refreshing
    }, 1000);
    this.stop = false;
  }

  playSong (){
    this.onPlay();
  }

  onPause() {
    clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;
  }

  onStop() {
    if (this.song ) {
      clearInterval(this.interval);
      this.audio.src = this.song.audio_url;
      this.stop = true;
    }
    console.log(`stop: ${this.stop}`);
  }

  toHumanTime(length) {
    //console.log(`toHumanTime() -> length: ${length}`);
    var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_int < 10 ? seconds_str.substr(0, 1) : seconds_str.substr(0, 2),
    time = (minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds_int < 10 ? "0" + seconds : seconds);
    return time;
  }

  refreshTimePlayed(event){
    //console.log(`event: ${event}`);
    this.valuePlayedTime = this.toHumanTime(event);
    this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
  }

  toPercent(time) {
      let duration = this.audio.duration;
      let minToSec = time.split(':');
      let minutos = Math.floor(parseInt(minToSec[0]) * 60);
      if(minToSec[1][0] === "0"){
        minToSec[1] = minToSec[1][1]
      }
      let segundos = Math.floor(parseInt(minToSec[1]));
      return Math.floor(minutos + segundos) * 100 / duration;
  }

  toSeconds(time){
    let duration = this.audio.duration;
    let minToSec = time.split(':');
    let minutos = Math.floor(parseInt(minToSec[0]) * 60);
    if(minToSec[1][0] === "0"){
      minToSec[1] = minToSec[1][1]
    }
    let segundos = Math.floor(parseInt(minToSec[1]));
    return minutos + segundos;
  }

  changeCurrentTime(){
    //console.log(`valuePlayedTime: ${this.valuePlayedTime}`);
    this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
    this.toHumanTime(this.audio.currentTime);
  }
}
