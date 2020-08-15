import { Component, OnInit, Input } from '@angular/core';
import { Ejercicio } from '../Ejercicio';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() ejercicio: Ejercicio;

  constructor() { }

  ngOnInit(): void {
  }

}
