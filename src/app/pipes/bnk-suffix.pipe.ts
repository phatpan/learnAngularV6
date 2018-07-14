import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toLocaleUpperCase() + '/BNK48';
  }

}
