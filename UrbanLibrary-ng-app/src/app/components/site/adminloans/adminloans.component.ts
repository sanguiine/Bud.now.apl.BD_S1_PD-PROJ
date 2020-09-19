import { Component, OnInit } from '@angular/core';
import { Loan } from '../../../model/loan';
import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'app-adminloans',
  templateUrl: './adminloans.component.html',
  styleUrls: ['./adminloans.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminloansComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllLoans();
  }

  public getAllLoans(){
    this.apiService.getAllLoans().subscribe(
      res => {
        this.loans = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }
}
