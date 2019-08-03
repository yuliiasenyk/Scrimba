import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.charAt(1).toUpperCase() + value.slice(2);
    }
    return value;
  }
}
