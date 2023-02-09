import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {


  alumnos: Alumno[]=[
    {alumnoInfo:{nombre: "Taiel", apellido: "Perez"}, curso: "Angular", profesor: "Abner"},

    {alumnoInfo:{nombre: "Juan", apellido: "Ramirez"}, curso: "React", profesor: "Adam"},

    {alumnoInfo:{nombre: "Mario", apellido: "Ramos"}, curso: "VueJs", profesor: "Nicolas"},

  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ["nombre", "curso", "profesor", "acciones"]

  constructor(private dialog: MatDialog){}

  abrirModal(alumno: Alumno){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      data: alumno
    });
  }

  addStudent(){
    let nombre = prompt("Escribe el nombre del alumno")
    let apellido = prompt("Escribe el apellido del alumno")
    let curso = prompt("Escribe el curso del alumno")
    let profesor = prompt("Escribe el profesor del alumno")

    let array: any = {alumnoInfo:{ nombre: nombre, apellido: apellido}, curso: curso, profesor:profesor}
    this.alumnos.push(array)
    console.log(this.alumnos)
  }

  remove(){
    this.alumnos.pop()
    console.log(this.alumnos)
  }
}
