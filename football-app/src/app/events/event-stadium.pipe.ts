import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stadiumPipe'
})
export class StadiumPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const words = value.split(' ');
      let wordCase: string[] ;
      wordCase = words.map(word => word[0].toLocaleLowerCase() + word.slice(1));
      return wordCase.join(' ');
    }
    else { return ''; }
  }
}
