import { Pipe, PipeTransform } from '@angular/core';
import { FeaturesDataType } from '../service/features-data.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: FeaturesDataType[], search: string = ''): FeaturesDataType[] {
    if (!search.trim()) {
      return items;
    }
    return items.filter(item => {
      return (item.name.toLowerCase().includes(search.toLowerCase()) || item.address.city.toLowerCase().includes(search.toLowerCase())) || item.company.name.toLowerCase().includes(search.toLowerCase()) && item
    }
    );
  }

}
