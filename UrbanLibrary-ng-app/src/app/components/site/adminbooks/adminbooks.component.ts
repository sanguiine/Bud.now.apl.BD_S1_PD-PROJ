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
    date: new Date(2000, 1, 1),
    booksReadByMember: null,
    categories: null,
    authors: null,
    reservations: null,
    isAvailable: true
  };

  books: Book[] = [];

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
}
