import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "../model/book";
import { Category } from '../model/category';
import { ReadedByMember } from "../model/readed";
import { Member } from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";


  //BOOKS
  private ALL_BOOKS_URL = this.BASE_URL.concat("/books/all");
  private BOOK_BY_ID = this.BASE_URL.concat("/books/byId/");


  private BOOK_COUNT_BY_CATEGORYNAME = this.BASE_URL.concat("/books/count/")
  private ALL_CATEGORIES_URL = this.BASE_URL.concat("/categories/all");
  private ALL_READED_URL = this.BASE_URL.concat("/readByMember/all");


  //MEMBERS
  private ALL_MEMBERS_URL = this.BASE_URL.concat("/members/all");
  private SAVE_UPDATE_MEMBER = this.BASE_URL.concat("/members");

  getAllMembers() : Observable<Member[]>{
    return this.http.get<Member[]>(this.ALL_MEMBERS_URL);
  }

  postMember(member: Member) : Observable<Member>{
    return this.http.post<Member>(this.SAVE_UPDATE_MEMBER, member);
  }

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
