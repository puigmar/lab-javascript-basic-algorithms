import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ejercicio } from '../Ejercicio';
import { EJERCICIOS } from '../collection-ejercicios';

import { EjercicioService } from '../ejercicio.service';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {
  ejercicios: Ejercicio[];
  ejercicioSeleccionado: Ejercicio;

  constructor(
    private ejercicioService: EjercicioService
  ) {}

  getEjercicios(): void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
  }

  ngOnInit(): void {
    this.getEjercicios();
  }

  onSelectEjercicio(ejercicio: Ejercicio): void{
    console.log(`Entro dentro del ejercicio ${ejercicio.name}`);
    this.ejercicioSeleccionado=ejercicio;
  }

}
