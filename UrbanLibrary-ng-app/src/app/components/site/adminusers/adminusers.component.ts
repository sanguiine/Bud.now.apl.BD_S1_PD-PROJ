import { Component, OnInit } from '@angular/core';
import { Member } from '../../../model/member';
import { ApiService } from '../../../shared/api.service';

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
}
