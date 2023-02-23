import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './components/material/material.component';
import { MaterialModuleModule } from './material-module.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { FormatoNombrePipe } from './pipes/formato-nombre.pipe';
import { DirectivaFuenteDirective } from './directives/directiva-fuente.directive';
import { AddDialogStudentComponent } from './components/add-dialog-student/add-dialog-student.component';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { PipeTrueFalsePipe } from './pipes/pipe-true-false.pipe';
import { ArrayAlumnosService } from './services/array-alumnos.service';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosHardcodeadoComponent } from './components/cursos-hardcodeado/cursos-hardcodeado.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    MaterialComponent,
    EditarDialogComponent,
    FormatoNombrePipe,
    DirectivaFuenteDirective,
    AddDialogStudentComponent,
    FiltroCursosPipe,
    PipeTrueFalsePipe,
    NoEncontradoComponent,
    InicioComponent,
    CursosHardcodeadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    FormsModule,

  ],
  providers: [
    ArrayAlumnosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
