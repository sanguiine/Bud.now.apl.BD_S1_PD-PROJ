import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service'
import { Book } from 'src/app/model/book';
import { Cart } from 'src/app/model/cart';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common'
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[];
  constructor(private msg: MessengerService,public globals: Globals) { 
  }

  ngOnInit() {
    this.cartItems = this.globals.books;
  }
  
}
