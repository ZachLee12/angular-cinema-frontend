import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordSpacing'
})
export class WordSpacingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + (args[0] as string);
  }

}
