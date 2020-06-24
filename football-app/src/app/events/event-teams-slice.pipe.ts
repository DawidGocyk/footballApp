import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTeams'
})
export class SliceTeamsPipe implements PipeTransform {

  transform(value: string[2]): string {

    return value[0] + ' vs ' + value[1];
  }
}
