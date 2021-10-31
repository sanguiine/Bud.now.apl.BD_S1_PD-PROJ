import { Component, OnInit } from '@angular/core';
import { Member } from '../../../model/member';
import { ApiService } from '../../../shared/api.service';
import {Category} from "../../../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminusersComponent implements OnInit {
  form = new FormGroup({
    ffirstName: new FormControl('', Validators.required),
    flastName: new FormControl('', Validators.required),
    femail: new FormControl('', [Validators.required, Validators.email]),
    faddress: new FormControl('', Validators.required),
    fcity: new FormControl('', Validators.required),
    fzip: new FormControl('', Validators.required),
    fphone: new FormControl('', Validators.required)
  });

  form2 = new FormGroup({
    fid: new FormControl('', Validators.required),
    ffirstName: new FormControl('', Validators.required),
    flastName: new FormControl('', Validators.required),
    femail: new FormControl('', [Validators.required, Validators.email]),
    faddress: new FormControl('', Validators.required),
    fcity: new FormControl('', Validators.required),
    fzip: new FormControl('', Validators.required),
    fphone: new FormControl('', Validators.required)
  });

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
    password: '123',
    role: 'user',
    bookReadByMember: null,
    bookReserved: null,
    loanlist: null
  };

  model2: Member;

  editID = null;
  editFirstName = '';
  editLastName = '';
  editEmail = '';
  editAddress = '';
  editCity = '';
  editZIP = '';
  editPhone = '';

  members: Member[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllMembers();
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

  addMember(): void {
    this.apiService.postMember(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }

  deleteMember(memberID : number) {
    this.apiService.deleteMember(memberID).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while deleting data.');
      }
    );
  }

  update(member: Member) {
    this.model2 = member;
    this.editID = member.memberID;
    this.editFirstName = member.firstNname;
    this.editLastName = member.lastName;
    this.editEmail = member.email;
    this.editAddress = member.address;
    this.editCity = member.city;
    this.editZIP = member.zipCode;
    this.editPhone = member.phoneNumber;
  }

  editMember(): void {
    this.model2.firstNname = this.editFirstName;
    this.model2.lastName = this.editLastName;
    this.model2.email = this.editEmail;
    this.model2.address = this.editAddress;
    this.model2.city = this.editCity;
    this.model2.zipCode = this.editZIP;
    this.model2.phoneNumber = this.editPhone;

    this.apiService.postMember(this.model2).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending data.');
      }
    );
  }
}
