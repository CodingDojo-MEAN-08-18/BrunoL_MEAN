import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capFirst'
})
export class CapFirstPipe implements PipeTransform {

  transform(phrase: string, args?: any): any {
    let firstLetter = phrase.substr(0,1);
    let remaining = phrase.substr(1);
    return firstLetter.toUpperCase() + remaining;
  }

}
