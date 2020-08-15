import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from '../../services/firebase.service';
import { FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { PropertyRead } from '@angular/compiler';

const URL = 'http://localhost:4200/src/assets/img';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  path: string = 'assets/img';
  pathMp3: string = 'assets/mp3'; 

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
  }

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    public firebaseService: FirebaseService,
    private formBuilder: FormBuilder
  ) {}

  @Input () countList: any;

  lastId: number;

  registerForm = this.formBuilder.group({
    title: [''],
    album: [''],
    author: [''],
    description: [''],
    duration: [''],
    style: [''],
    year: [''],
    picture: [''],
    cover: [''],
    audio_url: ['']
  })

  selectedFile = null;

  onFileSelected(event){
    console.log(event)
    this.selectedFile = event.target.files[0];
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }

  onSaveForm(){
    //Añadimos la id al objeto del formulario para más adelante poderlo referenciar en la llamada a firebase
    this.registerForm.value['songId'] = this.lastID();

    // capturamos las 3 propiedades de cover, audio y picture
    let {picture, cover, audio_url} = this.registerForm.value;
    
    //Mediante la función cleanUrlPath limpiamos la url por si el navegador añade el fakeurl delante, y
    //sustituímos de nuevo el valor en el objeto del formulario
    this.registerForm.value['picture'] = this.cleanUrlPath(picture);
    this.registerForm.value['cover'] = this.cleanUrlPath(cover);
    this.registerForm.value['audio_url'] = this.cleanUrlPath(audio_url);

    //console.log(this.registerForm.value);

    //Hacemos la llamada al servicio de firebase, concretamente al método saveSong que se encarga de 
    //registrar un nuevo documento en firebase
    this.firebaseService.saveSong(this.registerForm.value);

    //Cerramos el modal
    this.cerrarDialogo();
  }

  cleanUrlPath(prop) {
    let path = "C:\\fakepath\\";
    let cleanPaths = [];
    var realPath = (prop.indexOf('.mp3') > 0 || prop.indexOf('.m4a') > 0) ? this.pathMp3 : this.path;
    if(prop.indexOf(path) != -1) return `../../${realPath}/${prop.slice(path.length,prop.length)}`;
  }
  
  submit(){
    this.onSaveForm();
  }
  
  //Función que sirve para añadir el último id + 1 cuando se quiere hacer un registro nuevo
  lastID(){
    return (this.countList + 1).toString();
  }

}
