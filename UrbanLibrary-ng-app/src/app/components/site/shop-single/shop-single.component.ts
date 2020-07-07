import { Component, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../shared/api.service"

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {

  index: number;
  selectedBook: Book;

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
      },
      err =>{alert("An error has occurred while downloading the book;")}
    );
  }


}
