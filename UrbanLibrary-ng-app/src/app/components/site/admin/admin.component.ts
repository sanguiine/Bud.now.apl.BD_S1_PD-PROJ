import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {Member} from "../../../model/member";
import {Loan} from "../../../model/loan";
import {Reservation} from "../../../model/reservation";
import {Book} from "../../../model/book";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminComponent implements OnInit {
  members: Member[] = [];
  loans: Loan[] = [];
  reservations: Reservation[] = [];
  books: Book[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllMembers();
    this.getAllLoans();
    this.getAllReservations();
    this.getAllBooks();
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

  public getAllReservations(){
    this.apiService.getAllReservations().subscribe(
      res => {
        this.reservations = res;
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
}
