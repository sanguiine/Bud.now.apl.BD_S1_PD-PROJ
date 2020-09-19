import { Component, OnInit } from '@angular/core';
import { Author } from '../../../model/author';
import { ApiService } from '../../../shared/api.service';

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
}
