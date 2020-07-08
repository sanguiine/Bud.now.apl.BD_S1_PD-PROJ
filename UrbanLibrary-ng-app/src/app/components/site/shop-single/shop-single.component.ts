import { Component, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../shared/api.service";
import { Author } from "../../../model/author";
import { Category } from "../../../model/category";

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

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.index = params['id'])
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




}
