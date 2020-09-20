import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/member";
import {ApiService} from "../../../shared/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  member = JSON.parse(localStorage.getItem("loggedMember"))

  editFirstName = this.member.firstNname;
  editLastName = this.member.lastName;
  editEmail = this.member.email;
  editAddress = this.member.address;
  editCity = this.member.city;
  editZIP = this.member.zipCode;
  editPhone = this.member.phoneNumber;
  editDate = this.member.birthDate;
  newPassword = null;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  editMember(): void {
    this.member.email = this.editEmail;
    this.member.firstNname = this.editFirstName;
    this.member.lastName = this.editLastName;
    this.member.address = this.editAddress;
    this.member.city = this.editCity;
    this.member.zipCode = this.editZIP;
    this.member.birthDate = this.editDate;
    this.member.phoneNumber = this.editPhone;

    if(this.newPassword != null) {
      this.member.password = this.newPassword;
    }

    this.apiService.postMember(this.member).subscribe(
      res => {
        localStorage.setItem("loggedMember", JSON.stringify(this.member));
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
