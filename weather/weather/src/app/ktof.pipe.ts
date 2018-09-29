import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'KtoF'
})
export class KtoFPipe implements PipeTransform {

  transform(K: number, args?: any): any {
    let C = K - 273.15;
    return Math.round(C*1.8 + 32);
  }

}
