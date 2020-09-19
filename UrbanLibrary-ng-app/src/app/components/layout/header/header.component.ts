import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication.service';
import { Book } from '../../../model/book';
import { ApiService } from '../../../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';
import { Subscription } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchFilterPipe } from '../../../shared/filter-pipe';
import { MessengerService } from 'src/app/service/messenger.service'
import { Cart } from '../../../model/cart';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SearchFilterPipe]
})

export class HeaderComponent implements OnInit {
  searchString: string;

  bookForm: FormGroup;
  books: Book[] = [];
  showDropDown = false;
  cartItems = [];
  subscription: Subscription;
  globals: Globals;
  constructor(public loginService:AuthenticationService, private apiService: ApiService,
    private msg: MessengerService, private searchFilter: SearchFilterPipe, globals: Globals) {
    }
  

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
  }


  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }

  closeToggle(){
    this.showDropDown = false;
  }






}

