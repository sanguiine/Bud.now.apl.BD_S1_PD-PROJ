import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/member";
import {ApiService} from "../../../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: Member = {
    memberID: null,
    firstNname: '',
    lastName: '',
    birthDate: new Date(2000, 1, 1),
    city: '',
    zipCode: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: 'user',
    bookReadByMember: null,
    bookReserved: null,
    loanlist: null
  };

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addMember(): void {
    this.apiService.postMember(this.model).subscribe(
      res => {
        this.router.navigate(["success"])
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
