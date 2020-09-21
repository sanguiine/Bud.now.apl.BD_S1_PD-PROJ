import { Component, OnInit } from '@angular/core';
import { Loan } from '../../../model/loan';
import { ApiService } from '../../../shared/api.service';
import {Book} from "../../../model/book";
import {Member} from "../../../model/member";
import {Category} from "../../../model/category";

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
  model: Loan = {
    loanID: null,
    book: null,
    member: null,
    dateLoaned: new Date(2020, 1, 1),
    dateReturned: null
  };

  model2: Loan;

  editID = null;
  editDateLoaned = null;
  editDateReturned = null;
  editMember = null;
  editBook = null;

  loans: Loan[] = [];
  books: Book[] = [];
  members: Member[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllLoans();
    this.getAllBooks();
    this.getAllMembers();
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

  public getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        this.books = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  public getAllMembers(){
    this.apiService.getAllMembers().subscribe(
      res => {
        this.members = res;
      },
      err => {
        alert('An error has occured');
      }
    );
  }

  addLoan(): void {
    this.apiService.postLoan(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }

  deleteLoan(loanID : number) {
    this.apiService.deleteLoan(loanID).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while deleting data.');
      }
    );
  }

  update(loan: Loan) {
    this.model2 = loan;
    this.editID = loan.loanID;
    this.editDateLoaned = loan.dateLoaned;
    this.editDateReturned = loan.dateReturned;
    this.editBook = loan.book;
    this.editMember = loan.member;
  }

  editLoan(): void {
    this.model2.dateLoaned = this.editDateLoaned;
    this.model2.dateReturned = this.editDateReturned;
    this.model2.book = this.editBook;
    this.model2.member = this.editMember

    this.apiService.postLoan(this.model2).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
