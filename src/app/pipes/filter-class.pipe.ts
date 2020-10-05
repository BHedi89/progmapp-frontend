import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClass'
})
export class FilterClassPipe implements PipeTransform {

  transform(value: any, list: any): any {
    if (value !== null && list !== null) {
      const filteredClass = value.filter( (className) => className.name.search(new RegExp(list, 'i')) >= 0);
      if (filteredClass !== 0) {
        return filteredClass;
      }
    }
    else {
      return value;
    }
  }
}
