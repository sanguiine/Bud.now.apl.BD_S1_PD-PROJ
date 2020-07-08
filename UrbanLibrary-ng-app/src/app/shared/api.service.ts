import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "../model/book";
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  private ALL_BOOKS_URL = this.BASE_URL.concat("/books/all");
  private BOOK_BY_ID = this.BASE_URL.concat("/books/byId/");
  private BOOK_COUNT_BY_CATEGORYNAME = this.BASE_URL.concat("/books/count/")
  private ALL_CATEGORIES_URL = this.BASE_URL.concat("/categories/all");

  constructor(private http: HttpClient) { 

  }

  getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.ALL_BOOKS_URL);
  }

  getBookById(bookId: number) : Observable<Book> {
    return this.http.get<Book>(this.BOOK_BY_ID + bookId);
  }

  getCountBook(categoryName: string) : Observable<number> {
    return this.http.get<number>(this.BOOK_COUNT_BY_CATEGORYNAME + categoryName);
  }

  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.ALL_CATEGORIES_URL);
  }

}
