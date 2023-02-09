import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent {
  formulario: FormGroup;
  dialog: any;
  

  constructor(
    
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      let patronRegular: string ="^[A-z]+$";
      this.formulario = new FormGroup({
        nombre: new FormControl(data.alumnoInfo.nombre, [Validators.required, Validators.pattern(patronRegular)]),
        apellido: new FormControl(data.alumnoInfo.apellido, [Validators.required, Validators.pattern(patronRegular)]),
        curso: new FormControl(data.curso, [Validators.required, Validators.pattern(patronRegular)]),
        profesor: new FormControl(data.profesor,[Validators.required, Validators.pattern(patronRegular)]),
      }
      
      )
      
    }

}
