import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes',
  standalone: true
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
