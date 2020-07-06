import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../../../model/book";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  books: Book[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks(){
    let url = "http://localhost:8080/api/books/all";
    this.http.get<Book[]>(url).subscribe(
      res => {
        this.books = res;
      },
      err =>{
        alert("An error has occured");
      }
    );
  }


}
