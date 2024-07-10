import { Pipe, PipeTransform } from '@angular/core';
import { json } from 'stream/consumers';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], text: any): any[] {
    if (!items) {
      return [];
    }
    if (!text) {
      return items;
    }
    return items.filter(item => {
      return item.id.toString().includes(text);
    });
  }

}
