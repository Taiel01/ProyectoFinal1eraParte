import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombre'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(nombreCompleto: string, ...args: any[]): string {
    let result: string;

    result = args[0] + " " + args[1]

    return result;
  }

}
