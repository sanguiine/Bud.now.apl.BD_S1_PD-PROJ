import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'app-admingenres',
  templateUrl: './admingenres.component.html',
  styleUrls: ['./admingenres.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdmingenresComponent implements OnInit {
  categories: Category[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories(){
    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }
}
