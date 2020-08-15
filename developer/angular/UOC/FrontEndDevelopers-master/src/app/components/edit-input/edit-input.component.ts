import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../../clases/song';

@Component({
  selector: 'editField',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css']
})
export class EditInputComponent implements OnInit {
  
  constructor() { }
  
  @Input() text: Song;
  @Input() field: string;

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }
  
  onEditField(event: any){
    this.onEdit.emit(event);
  }

  onSaveField(event: any, field: string, text: string){
    console.log(`field: ${field} `);
    this.onSave.emit(
      {
        event: event,
        field: field,
        text: text
      }
    );
  }

  changeText(event:any){
    let value = event.target.value;
    this.text = value;
  }

  onCloseField(event: any){
    this.onClose.emit(event);
  }


}

