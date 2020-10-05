import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, name: string): string {
    if(name.toUpperCase())
    return value.toLowerCase();
  }

}
