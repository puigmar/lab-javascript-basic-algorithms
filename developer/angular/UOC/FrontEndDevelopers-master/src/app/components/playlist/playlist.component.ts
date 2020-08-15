import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { Song } from '../../clases/song';
import { Observable} from 'rxjs';
import { ReproducerComponent } from '../reproducer/reproducer.component';
import { FirebaseService } from '../../services/firebase.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  @Input() songs: Observable<Song[]>;

  @ViewChild(ReproducerComponent, {static: false}) player:ReproducerComponent ;

  selectedSong: Song;
  playedSong: Song;
  filterSongs: string;
  searchValue: string;
  oldSong: Song;

  constructor(
    public firebaseService: FirebaseService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log('songs: ' + this.songs);
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  onPlay(song: Song): void {
    this.playedSong = song;
    console.log(this.playedSong.title);
    this.oldSong = this.selectedSong;
    if(this.oldSong !== this.playedSong){
      this.player.onStop()
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '740px',
      data: {}
    });

    let idListArray = [];
    //Recogemos todos los elementos mat-list-item
    let idList = document.querySelectorAll(".mat-list mat-list-item");
    //Recorremos los elementos, obtenemos su atributo id, y lo guardamos en el array idListArray
    idList.forEach(item => {
      idListArray.push(parseInt(item.getAttributeNode('id').value));
    });
    // pasamos el valor countList al modal
    let instance = dialogRef.componentInstance;
    //Averiguamos de todos los números del array cuan es el más alto
    instance.countList = idListArray.reduce ( (prev, curr) => prev > curr ? prev : curr);
  }

  searchByName(event){
    this.filterSongs = event;
  }
}
