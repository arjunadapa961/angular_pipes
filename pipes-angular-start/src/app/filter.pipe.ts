import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false   // for adding the new server even filteration causes performance issue
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, propName: string) {
    if (value.length === 0 || filteredStatus === '') {
      return value
    }
    let resultArray = []
    for (let item of value) {
      if (item[propName] === filteredStatus) {
        resultArray.push(item)
      }
    }
    return resultArray
  }

}
