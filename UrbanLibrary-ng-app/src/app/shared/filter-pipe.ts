import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/model/book';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: Book[], filterBy: string): Book[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: Book) =>
            product.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
      }
}