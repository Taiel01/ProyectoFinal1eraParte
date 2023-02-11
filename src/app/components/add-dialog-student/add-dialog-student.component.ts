import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-dialog-student',
  templateUrl: './add-dialog-student.component.html',
  styleUrls: ['./add-dialog-student.component.css']
})
export class AddDialogStudentComponent {
  formulario: FormGroup;
  dialog: any;
  
  constructor(
    private dialogRef: MatDialogRef<AddDialogStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
    ){
      let patronRegular: string ="^[A-z]+$";
        this.formulario = new FormGroup({
          nombre: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          apellido: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          curso: new FormControl("", [Validators.required, Validators.pattern(patronRegular)]),
          profesor: new FormControl("",[Validators.required, Validators.pattern(patronRegular)]),
        }
        )
    }
}
