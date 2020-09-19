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
  model: Category = {
    categoryID: null,
    name: ''
  };

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

  addCategory(): void {
    this.apiService.postCategory(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }

  deleteCategory(categoryID : number) {
    this.apiService.deleteCategory(categoryID).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while deleting data.');
      }
    );
  }
}
