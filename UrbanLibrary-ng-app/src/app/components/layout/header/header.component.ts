import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication.service';
import { Book } from '../../../model/book';
import { ApiService } from '../../../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchFilterPipe } from '../../../shared/filter-pipe';


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
  constructor(public loginService:AuthenticationService, private apiService: ApiService, private searchFilter: SearchFilterPipe) {
   }
  showDropDown = false;

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        this.books = res;
        console.log(this.books);
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }

  closeToggle(){
    this.showDropDown = false;
  }

}

