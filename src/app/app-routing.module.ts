import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosHardcodeadoComponent } from './components/cursos-hardcodeado/cursos-hardcodeado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MaterialComponent } from './components/material/material.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path: "cursos", children: [
    {path: "students", component: MaterialComponent},
    {path: "curses", component: CursosHardcodeadoComponent}
  ]},
  {path: "inicio", component: InicioComponent},
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "**", component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
