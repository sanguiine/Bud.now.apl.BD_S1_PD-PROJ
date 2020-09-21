import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/member";
import {ApiService} from "../../../shared/api.service";
import {Router} from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
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

  angForm: FormGroup;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      editFirstName: ['', Validators.required ],
      editLastName: ['', Validators.required ],
      editEmail: ['', Validators.required ],
      editAddress: ['', Validators.required ],
      editCity: ['', Validators.required ],
      editZIP: ['', Validators.required ],
      editPhone: ['', Validators.required ],
      editDate: ['', Validators.required ],
    });
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
