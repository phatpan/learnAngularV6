import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, letterCase: string): any {
    if (letterCase === 'lower') {
      return value.toLocaleLowerCase() + '/BNK48';
    }
    return value.toLocaleUpperCase() + '/BNK48';
  }

}
