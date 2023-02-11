import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AddDialogStudentComponent } from '../add-dialog-student/add-dialog-student.component';
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

  abrirModal(alumno: Alumno){ // Tiene que editar, osea que los cambios que se hagan editen el alumno
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      data: alumno
    });
  }

  addStudent(){
    this.dialog.open(AddDialogStudentComponent);
    //tengo que hacer que el form sea la base d los datos de abajo
    let nombre = prompt("Escribe el nombre del alumno")
    let apellido = prompt("Escribe el apellido del alumno")
    let curso = prompt("Escribe el curso del alumno")
    let profesor = prompt("Escribe el profesor del alumno")

    let array: any = {alumnoInfo:{ nombre: nombre, apellido: apellido}, curso: curso, profesor:profesor}
    this.alumnos.push(array)
    console.log(this.alumnos)
    this.dataSource = new MatTableDataSource(this.alumnos)
  }

  remove(){ //Tiene que eliminar el correcto, quizas con algun parm
    this.alumnos.pop()
    console.log(this.alumnos)
    this.dataSource = new MatTableDataSource(this.alumnos)
  }
}
