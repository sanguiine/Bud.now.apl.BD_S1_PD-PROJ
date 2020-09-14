import { Component, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../shared/api.service";
import { Author } from "../../../model/author";
import { Category } from "../../../model/category";
import { MessengerService } from 'src/app/service/messenger.service'

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {

  index: number;
  selectedBook: Book;
  bookAuthors: Author[];
  bookCategories: Category[];
  count = 0;
  counter = 1;

  books: Book[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private msg:MessengerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.index = params['id']);
    this.getAllBooks();
    this.getBookById(this.index);
  }

  getBookById(id: number)
  {
    this.apiService.getBookById(id).subscribe(
      res=> {
        this.selectedBook = res;
        this.bookAuthors = res.authors;
        this.bookCategories = res.categories;
      },
      err =>{alert("An error has occurred while downloading the book;")}
    );
  }

  getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        this.books = res;
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

  countBooks() {
    this.count = 0;
    for(var i = 0 ; i<this.books.length;i++)
    {
      if(this.index == this.books[i].bookID)
      {
        this.count++;
      }
    }
    return this.count;
  }

  counterUp() {
    if(this.counter < this.count)
    {
      this.counter++;
    }
    else
    {
      alert("Nie ma więcej dostępnych książek!");
    }
  }

  counterDown() {
    if(this.counter > 1)
    {
      this.counter--;
    }
  }

  addToCart() {
    this.msg.sendMsg(this.selectedBook);
  }

  clearMessage():void{
    this.msg.clearMessage();
  }

}
