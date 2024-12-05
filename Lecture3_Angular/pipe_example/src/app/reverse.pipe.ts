import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  givenStr: string = ""
  transform(value: any): string {
    this.givenStr = value.split('').reverse().join('');
    return this.givenStr;
  }

}
