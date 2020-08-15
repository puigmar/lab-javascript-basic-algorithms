import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Song } from '../../clases/song';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
    // Emitimos el evento filter para que el padre lod etecte
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    // Cargamos las cancioens a traves de un observable del tipo Song
    @Input() songs: Observable<Song[]>;
    
    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    options:string[] = [];
    
    filterBySongName(songName){
      console.log(`emit value: ${songName}`)
      this.filter.emit(songName);
    }
  
    fillOptionsArray(object){
      // nos suscribimos al observable para sacar los datos y montar el nuevo array de búsqueda
      this.songs.subscribe(result => {
        result.map(item => {
          this.options.push(item.title);
        })
      })
      
    }

    ngOnInit() {
      this.fillOptionsArray(this.songs);
      
      this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      }
      
    
      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
      }
  
    }
