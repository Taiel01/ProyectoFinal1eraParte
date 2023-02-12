import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';

@Pipe({
  name: 'pipeTrueFalse'
})
export class PipeTrueFalsePipe implements PipeTransform {

  transform(varBoolean: boolean, ...arg: any[]): string {
    let data1 = "";
    if (varBoolean){
      data1 = "Inscripciones abiertas!"
    }else{
      data1 = "Inscripciones cerradas"
    }
    return data1;
  }

}
