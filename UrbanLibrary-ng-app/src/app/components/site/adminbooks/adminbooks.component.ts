import { Component, OnInit } from '@angular/core';
import { Book } from '../../../model/book';
import { ApiService } from '../../../shared/api.service';
import {Category} from "../../../model/category";
import {Author} from "../../../model/author";

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminbooksComponent implements OnInit {
  model: Book = {
    bookID: null,
    title: '',
    cover: '',
    imgName: 'no_img.jpg',
    description: '',
    date: null,
    booksReadByMember: null,
    categories: null,
    authors: null,
    reservations: null,
    isAvailable: true
  };

  model2: Book;

  editID = null;
  editDate = null;
  editTitle = '';
  editDescription = '';
  editImg = '';

  books: Book[] = [];
  categories: Category[] = [];
  authors: Author[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  public getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        this.books = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  addBook(): void {
    this.apiService.postBook(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }

  deleteBook(bookID : number) {
    this.apiService.deleteBook(bookID).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while deleting data.');
      }
    );
  }

  update(book: Book) {
    this.model2 = book;
    this.editID = book.bookID;
    this.editDate = book.date;
    this.editTitle = book.title;
    this.editDescription = book.description;
  }

  editBook(): void {
    this.model2.date = this.editDate;
    this.model2.title = this.editTitle;
    this.model2.description = this.editDescription;

    this.apiService.postBook(this.model2).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
