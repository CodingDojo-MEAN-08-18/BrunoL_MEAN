import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'error'
})
export class ErrorPipe implements PipeTransform{
  transform(err: Object){
    console.log('in the pipe!', err)
    if(err === null){
      return ''
    }
    if(Object.keys(err).length==0){
      return '';
    }
    let msg: Array<string>= [];
    if(err['required']){
      msg.push('Field is required.');
    }
    if(err['pattern']){
      msg.push('Invalid format for this field.');
    }
    if(err['minlength']){
      msg.push('Value is too short for this field.');
    }
    return msg.join(' ');

  }

}
