import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/member";
import {ApiService} from "../../../shared/api.service";
import {Router} from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
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

  angForm: FormGroup;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      firstNname: ['', Validators.required ],
      lastName: ['', Validators.required ],
      address: ['', Validators.required ],
      city: ['', Validators.required ],
      zipCode: ['', Validators.required ],
      birthDate: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
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
