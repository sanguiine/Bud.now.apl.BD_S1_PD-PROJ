import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../../../model/book";
import { ApiService } from "../../../shared/api.service"
import { MyFilterPipePipe } from '../../../shared/pipes/my-filter-pipe.pipe';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [MyFilterPipePipe]
})
export class ShopComponent implements OnInit {
  searchTextAuthor: string;

  books: Book[] = [];
  selectedBook: Book;
  
  categories: Category[] = [];
  selectedCategory: Category;

  

  constructor(private apiService: ApiService, private myFilterPipe: MyFilterPipePipe) { }

  ngOnInit() {
    this.getAllBooks();
    this.getAllCategories();
  }

  public getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        this.books = res;
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

  public getAllCategories(){
    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
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
