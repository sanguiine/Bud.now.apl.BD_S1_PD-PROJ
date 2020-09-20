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

  model2: Category = {
    categoryID: null,
    name: ''
  };

  editID = null;
  editName = '';

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

  update(category: Category) {
    this.editID = category.categoryID;
    this.editName = category.name;
  }

  editCategory(): void {
    this.model2.categoryID = this.editID;
    this.model2.name = this.editName;

    this.apiService.postCategory(this.model2).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
