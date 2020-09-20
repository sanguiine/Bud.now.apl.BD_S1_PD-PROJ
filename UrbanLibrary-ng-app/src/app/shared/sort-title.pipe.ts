import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';
import { Globals } from '../model/globals';

@Pipe({
  name: 'sortTitle',
  pure: false,
})
export class SortTitlePipe implements PipeTransform {

  constructor(public globals: Globals){}

  transform(value: Array<Book>, ...args: unknown[]): Array<Book> {
    return value.sort((a, b) => {
      if(this.globals.rosnaco){
        if(a.title.toLowerCase() > b.title.toLowerCase()){
          return 1;
        }else{
          return -1;
        }
      }
      else
      {
        if(a.title.toLowerCase() > b.title.toLowerCase()){
          return -1;
        }else{
          return 1;
        }
      }
    });
  }

}
