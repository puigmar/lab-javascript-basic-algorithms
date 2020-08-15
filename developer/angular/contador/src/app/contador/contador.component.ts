import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

  @Input() contador:number;
  @Output() inputValue = new EventEmitter;

  addValue($event):void{
    this.contador++;
    this.inputValue.emit(this.contador);
  }

  removeValue($event):void{
    this.contador--;
    this.inputValue.emit(this.contador);
  }

  updateValue($event):void{
    console.log($event);
    this.contador = $event;
    this.inputValue.emit(this.contador);
  }

  resetValue():void{
    this.contador = 0;
    this.inputValue.emit(this.contador);
  }

}
