import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordSpacing'
})
export class WordSpacingPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value = value + (args[0] as string)


    return value;
  }

}
