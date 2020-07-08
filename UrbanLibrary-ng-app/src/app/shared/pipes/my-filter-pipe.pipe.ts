import { Pipe, PipeTransform } from '@angular/core';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
@Pipe({
  name: 'myFilterPipe'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(value: Book[], filterBy: string): Book[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: Book) =>
        product.authors[0].firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
