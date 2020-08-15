import { Injectable } from '@angular/core';
import { Ejercicio } from './Ejercicio';
//import { EJERCICIOS } from './collection-ejercicios';
import { Observable, of} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor( private firestore: AngularFirestore ) {}

  getEjercicios(): Observable<any[]> {
    return this.firestore.collection('ejercicios', ref => ref.orderBy('id')).valueChanges();
  }
}
