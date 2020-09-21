import { Component, OnInit } from '@angular/core';
import { Author } from '../../../model/author';
import { ApiService } from '../../../shared/api.service';
import {Category} from "../../../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  form = new FormGroup({
    ffirstName: new FormControl('', Validators.required),
    flastName: new FormControl('', Validators.required)
  });

  form2 = new FormGroup({
    fid: new FormControl('', Validators.required),
    ffirstName: new FormControl('', Validators.required),
    flastName: new FormControl('', Validators.required)
  });

  model: Author = {
    authorID: null,
    firstName: '',
    lastName: ''
  };

  model2: Author;

  editID = null;
  editFirstName = '';
  editLastName = '';

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

  update(author: Author) {
    this.model2 = author;
    this.editID = author.authorID;
    this.editFirstName = author.firstName;
    this.editLastName = author.lastName;
  }

  editAuthor(): void {
    this.model2.firstName = this.editFirstName;
    this.model2.lastName = this.editLastName;

    this.apiService.postAuthor(this.model2).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
