import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../../../model/book";
import { ApiService } from "../../../shared/api.service"

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllBooks();
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

  selectBook(book: Book) {
    this.selectedBook = book;
    this.apiService.getBookById(book.bookID).subscribe(
      res=> {
        this.selectedBook = res;
      },
      err =>{alert("An error has occurred while downloading the book;")}
    );
  }


}
