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
}
