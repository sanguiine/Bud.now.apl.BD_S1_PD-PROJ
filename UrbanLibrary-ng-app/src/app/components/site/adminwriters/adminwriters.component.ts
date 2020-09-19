import { Component, OnInit } from '@angular/core';
import { Author } from '../../../model/author';
import { ApiService } from '../../../shared/api.service';
import {Category} from "../../../model/category";

@Component({
  selector: 'app-adminwriters',
  templateUrl: './adminwriters.component.html',
  styleUrls: ['./adminwriters.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminwritersComponent implements OnInit {
  model: Author = {
    authorID: null,
    firstName: '',
    lastName: ''
  };

  authors: Author[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  public getAllAuthors(){
    this.apiService.getAllAuthors().subscribe(
      res => {
        this.authors = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  addAuthor(): void {
    this.apiService.postAuthor(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }

  deleteAuthor(authorID : number) {
    this.apiService.deleteAuthor(authorID).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while deleting data.');
      }
    );
  }
}
