import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../clases/song';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;

  constructor(
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    
  }

  ngOnChanges(){
    //cerramos todos los campos editables
    this.resetEditForms()
  }
  
  resetEditForms(){
    let inputs = document.querySelectorAll('.playList__songs__details input');
    inputs.forEach( item => item.parentElement.classList.remove('active'));
  }

  onEdit(event){
    console.log(`event: ${event}`)
    let item = event.target;
    let input = item.querySelector('.card__songData__form__input');
    item.classList.add('active');
  }

  onCloseEdit(event){
    let item = event.target;
    item.parentElement.parentElement.classList.remove('active');
  }

  onSave(object){
    console.log(`field: ${object.field}`);
    this.firebaseService.updateDetail(this.song, object.field, object.text);
    //Cerramos el campo editable
    this.onCloseEdit(object.event);
  }

}
