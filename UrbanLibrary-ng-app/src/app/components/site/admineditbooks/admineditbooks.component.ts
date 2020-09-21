import { Component, OnInit } from '@angular/core';
import { Book } from '../../../model/book';
import { ApiService } from '../../../shared/api.service';
import {Category} from "../../../model/category";
import {Author} from "../../../model/author";

@Component({
  selector: 'app-admineditbooks',
  templateUrl: './admineditbooks.component.html',
  styleUrls: ['./admineditbooks.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdmineditbooksComponent implements OnInit {
  books: Book[] = [];
  categories: Category[] = [];
  authors: Author[] = [];

  selectedBook: Book;
  selectedCategory: Category;

  selectedBook2: Book;
  selectedCategory2: Category;

  selectedBook3: Book;
  selectedAuthor3: Author;

  selectedBook4: Book;
  selectedAuthor4: Author;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCategories();
    this.getAllAuthors();
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

  public getAllCategories(){
    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  public getAllAuthors(){
    this.apiService.getAllAuthors().subscribe(
      res => {
        this.authors = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  addCategoriesToBook() {
    this.selectedBook.categories.push(this.selectedCategory);
    this.apiService.postBook(this.selectedBook).subscribe();
  }

  deleteCategoriesFromBook(catID) {
    for(var i = 0; i < this.selectedBook2.categories.length; i++)
    {
      if(this.selectedBook2.categories[i].categoryID == catID)
      {
        this.selectedBook2.categories.splice(i,1);
      }
    }

    this.apiService.postBook(this.selectedBook2).subscribe();
  }

  addAuthorsToBook() {
    this.selectedBook3.authors.push(this.selectedAuthor3);
    this.apiService.postBook(this.selectedBook3).subscribe();
  }

  deleteAuthorsFromBook(autID) {
    for(var i = 0; i < this.selectedBook4.authors.length; i++)
    {
      if(this.selectedBook4.authors[i].authorID == autID)
      {
        this.selectedBook4.authors.splice(i,1);
      }
    }

    this.apiService.postBook(this.selectedBook4).subscribe();
  }
}
