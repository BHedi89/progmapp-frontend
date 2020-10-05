import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, list: any): any {
    if (value != null && list != null) {
      const filteredUser = value.filter((user) => user.name.search(new RegExp(list, 'i')) >= 0);
      if (filteredUser !== 0) {
        return filteredUser;
      }
    }
    else {
      return value;
    }
  }
}
