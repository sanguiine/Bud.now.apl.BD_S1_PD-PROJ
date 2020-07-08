import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication.service';
import { Book } from '../../../model/book';
import { ApiService } from '../../../shared/api.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  books: Book[] = [];
  filteredOptions: Observable<Book[]>;
  constructor(public loginService:AuthenticationService, private apiService: ApiService ) { }

  ngOnInit() {
    this.getAllBooks();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.books.slice())
      );
  }

  displayFn(book: Book): string {
    return book && book.title ? book.title : '';
  }

  private _filter(title: string): Book[] {
    const filterValue = title.toLowerCase();

    return this.books.filter(books => books.title.toLowerCase().indexOf(filterValue) === 0);
  }

  public getAllBooks(){
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.books = res;
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

}
