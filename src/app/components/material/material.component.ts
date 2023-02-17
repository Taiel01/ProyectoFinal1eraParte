import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { AddDialogStudentComponent } from '../add-dialog-student/add-dialog-student.component';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayAlumnosService } from 'src/app/services/array-alumnos.service';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {




  //

  filtro: string = "";

  cursos: Curso[]=[
    {nombre: "Angular", abierto: true},
    {nombre: "React", abierto: false},
    {nombre: "Vue", abierto: true},
    {nombre: "NodeJs", abierto: true},
  ];

  alumnos!: Alumno[];
  dataSource: MatTableDataSource<Alumno>;
  columnas: string[] = ["nombre", "curso", "profesor", "acciones"]
  formulario: any;
   form: any;

  constructor(private dialog: MatDialog, private arrayAlumnosService: ArrayAlumnosService){

    this.alumnos = arrayAlumnosService.obtenerAlumnos();
    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);

    

    let patronRegular: string ="^[A-z]+$";
        this.formulario = new FormGroup({
          nombre: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          apellido: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          curso: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          profesor: new FormControl("",[Validators.required, Validators.pattern(patronRegular)]),
        }
        )

  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.arrayAlumnosService.obtenerAlumnosPromiseObservable().subscribe((alumnos: Alumno[])=>{
      this.dataSource.data = alumnos;
    })
  } 

  abrirModal(alumno: Alumno){ // Tiene que editar, osea que los cambios que se hagan editen el alumno
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      data: alumno
    });
  }

  addStudent(){

    //this.dialog.open(AddDialogStudentComponent);
    //tengo que hacer que el form sea la base d los datos de abajo

    
    let nombre = this.form.get("nombre").value
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
