import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api/books";
  private ALL_BOOKS_URL = this.BASE_URL.concat("/all");
  private BOOK_BY_ID = this.BASE_URL.concat("/byId/")

  constructor(private http: HttpClient) { 

  }

  getAllNotebooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.ALL_BOOKS_URL);
  }

  getBookById(bookId: number) : Observable<Book> {
    return this.http.get<Book>(this.BOOK_BY_ID + bookId);
  }

}
