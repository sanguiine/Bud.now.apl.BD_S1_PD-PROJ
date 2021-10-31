import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css']
})
export class SidemenuComponent implements OnInit {
  member = JSON.parse(localStorage.getItem("loggedMember"))

  firstName = this.member.firstNname;
  lastName = this.member.lastName;
  email = this.member.email;

  constructor() { }

  ngOnInit(): void {
  }

}
