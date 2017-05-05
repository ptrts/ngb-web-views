import {Pipe} from '@angular/core';

@Pipe({
  name: 'decimalGroupsSeparator'
})
export class DecimalGroupsSeparatorPipe {

  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
