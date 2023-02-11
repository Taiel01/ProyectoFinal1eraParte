import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogStudentComponent } from '../add-dialog-student/add-dialog-student.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  constructor(private dialogRef: MatDialog){}

  addStudent() {
    this.dialogRef.open(AddDialogStudentComponent);
  }

}


