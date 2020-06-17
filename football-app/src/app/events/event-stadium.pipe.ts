import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stadiumPipe'
})
export class StadiumPipe implements PipeTransform {

  transform(value: string): string {
    var words = value.split(' ');
    var wordCase
    wordCase = words.map(word => word[0].toLocaleLowerCase() + word.slice(1))
    return wordCase.join(' ')
  }
}
