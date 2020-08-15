/**
 *  Strings
 *  Boolean
 *  Number
 *  Array
 *  Tuplas
 *  Enums
 *  Any
 *  Void
 */

 let nombreVariable:string = 'Nombre';
 
 let edad:number = 25;

 let lista:number[] = [1,2,3];

 let lista2: Array<number> = [1,2,3];

 let tupla: [string, number];
 tupla = ['David', 30];

 enum Animales {Perro, Gato, Pajaro};
 let gato:Animales = Animales.Gato;

 let cualquiera:any = true;
 let nada: void = undefined; //undefined or void

 /*Clases*/
 class NombreClase {
     private _propiedad: string;
     constructor(propiedad: string){
         this._propiedad = propiedad;
     }

     get propiedad(): string {
         return this._propiedad;
     }

     set propiedad(propiedad: string){
         this._propiedad = propiedad;
     }

     printMsg(){
         return `Esta clase tiene esta propiedad: ${this._propiedad}`
     }

 }

 /* Interfaces */
 interface LoginInterface{
     msg: string;
     date?: number; //no tienes porque implementar esta variable, es opcional.
 }

 function Logger(log: LoginInterface){
     console.log(log.msg);
 }



