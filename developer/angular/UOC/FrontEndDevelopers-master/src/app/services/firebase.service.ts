import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Song } from '../clases/song';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getSongs(){
    return this.db.collection('/songs').valueChanges({idField: 'songId'})
  }

  updateDetail(song: Song, field: string, text: string){
    console.log(`songID: ${song.songId}`);
    console.log(`field: ${field}`);
    console.log(`text: ${text}`);
    let songDetails = this.db.doc(`/songs/${song.songId}`);
    songDetails.set({
      [field]: text
    }, {merge: true})
  }

  saveSong (song: Song): void {
    console.log(song.songId);
    console.log(song.title);
    this.db.collection('/songs').doc(song.songId).set({
      title: song.title,
      album: song.album,
      author: song.author,
      style: song.style,
      year: song.year,
      duration: song.duration,
      description: song.description,
      picture: song.picture,
      cover: song.cover,
      audio_url: song.audio_url
    });
  }
}
