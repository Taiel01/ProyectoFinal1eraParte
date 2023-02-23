import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class ArrayAlumnosService {

  private alumnos: Alumno[]=[
    {alumnoInfo:{nombre: "Taiel", apellido: "Perez"}, curso: "Angular", profesor: "Abner"},

    {alumnoInfo:{nombre: "Juan", apellido: "Ramirez"}, curso: "React", profesor: "Adam"},

    {alumnoInfo:{nombre: "Mario", apellido: "Ramos"}, curso: "VueJs", profesor: "Nicolas"},

  ];

  constructor(){}

  obtenerAlumnosPromise(): Promise<Alumno[]>{
    return new Promise((resolve, reject)=> {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject([])
      }
    });
  }

  obtenerAlumnosPromiseObservable(): Observable<Alumno[]>{
    return new Observable<Alumno[]>((suscriptor)=>{
      suscriptor.next(this.alumnos);
    });
  }


  obtenerAlumnos(): Array<Alumno>{
    return this.alumnos
  }

  editarCurso(alumno: Alumno): void{
    let indice = this.alumnos.findIndex((a: Alumno) => a.alumnoInfo.nombre === alumno.alumnoInfo.nombre);

    if(indice > -1){
      this.alumnos[indice] = alumno;
      //this.alumnos.next(this.alumnos);
    }

  }
}
