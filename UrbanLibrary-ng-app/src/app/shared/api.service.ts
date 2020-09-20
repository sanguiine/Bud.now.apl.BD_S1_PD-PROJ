import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { ReadedByMember } from '../model/readed';
import { Member } from '../model/member';
import { Author } from '../model/author';
import { Loan } from '../model/loan';
import { Reservation } from '../model/reservation';
import { ReservationItems } from '../model/reservationItems';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/api';

  // BOOKS
  private ALL_BOOKS_URL = this.BASE_URL.concat('/books/all');
  private BOOK_BY_ID = this.BASE_URL.concat('/books/byId/');
  private BOOK_COUNT_BY_CATEGORYNAME = this.BASE_URL.concat('/books/count/');
  private SAVE_UPDATE_BOOK = this.BASE_URL.concat('/books');
  private DELETE_BOOK = this.BASE_URL.concat('/books/');

  // CATEGORIES
  private ALL_CATEGORIES_URL = this.BASE_URL.concat('/categories/all');
  private SAVE_UPDATE_CATEGORY = this.BASE_URL.concat('/categories');
  private DELETE_CATEGORY = this.BASE_URL.concat('/categories/');

  // READBYMEMBER
  private ALL_READED_URL = this.BASE_URL.concat('/readByMember/all');

  // MEMBERS
  private ALL_MEMBERS_URL = this.BASE_URL.concat('/members/all');
  private SAVE_UPDATE_MEMBER = this.BASE_URL.concat('/members');
  private MEMBER_BY_ID = this.BASE_URL.concat('/members/byId/')
  private DELETE_MEMBER = this.BASE_URL.concat('/members/');

  getMember(memberID: number): Observable<Member>{
    return this.http.get<Member>(this.MEMBER_BY_ID + memberID);
  }

  //CART / RESERVATION
  private ALL_RESERVATIONS_URL = this.BASE_URL.concat('/reservations/all');
  private ALL_RESERVATIONSITEMS_URL = this.BASE_URL.concat('/reservationsitems/all');
  private SAVE_UPDATE_RESERVATION = this.BASE_URL.concat('/reservations');
  private SAVE_UPDATE_RESERVATION_ITEM = this.BASE_URL.concat('/reservationsitems')

  getAllReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.ALL_RESERVATIONS_URL);
  }

  postReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.SAVE_UPDATE_RESERVATION, reservation);
  }

  postReservationItem(reservationItem: ReservationItems): Observable<ReservationItems>{
    return this.http.post<ReservationItems>(this.SAVE_UPDATE_RESERVATION_ITEM, JSON.parse(JSON.stringify(reservationItem)));
  }

  getAllReservationsItems(): Observable<ReservationItems[]>{
    return this.http.get<ReservationItems[]>(this.ALL_RESERVATIONSITEMS_URL);
  }


  // AUTHORS
  private ALL_AUTHORS_URL = this.BASE_URL.concat('/authors/all');
  private SAVE_UPDATE_AUTHOR = this.BASE_URL.concat('/authors');
  private DELETE_AUTHOR = this.BASE_URL.concat('/authors/');

  // LOANS
  private ALL_LOANS_URL = this.BASE_URL.concat('/loans/all');


  getAllMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.ALL_MEMBERS_URL);
  }

  postMember(member: Member): Observable<Member>{
    return this.http.post<Member>(this.SAVE_UPDATE_MEMBER, member);
  }

  deleteMember(id: number): Observable<any>{
    return this.http.delete(this.DELETE_MEMBER + id);
  }

  constructor(private http: HttpClient) {

  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.ALL_BOOKS_URL);
  }

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(this.BOOK_BY_ID + bookId);
  }

  getCountBook(categoryName: string): Observable<number> {
    return this.http.get<number>(this.BOOK_COUNT_BY_CATEGORYNAME + categoryName);
  }

  postBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.SAVE_UPDATE_BOOK, book);
  }

  deleteBook(id: number): Observable<any>{
    return this.http.delete(this.DELETE_BOOK + id);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ALL_CATEGORIES_URL);
  }

  postCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.SAVE_UPDATE_CATEGORY, category);
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete(this.DELETE_CATEGORY + id);
  }

  getAllAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.ALL_AUTHORS_URL);
  }

  postAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(this.SAVE_UPDATE_AUTHOR, author);
  }

  deleteAuthor(id: number): Observable<any>{
    return this.http.delete(this.DELETE_AUTHOR + id);
  }

  getAllLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.ALL_LOANS_URL);
  }
}
