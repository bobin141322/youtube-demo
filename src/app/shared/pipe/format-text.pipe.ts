import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string) {
    if (value.length > 100) {
      value = value.substring(0, 100) + '...';
    }
    return value;
  }

}
