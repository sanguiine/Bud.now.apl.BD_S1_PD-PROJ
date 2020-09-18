import { Injectable } from '@angular/core';
import { ApiService } from "../shared/api.service"
import { Member } from "../model/member";
import { Globals } from 'src/app/model/globals';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  members: Member[];
  

  constructor(private apiService: ApiService, public globals: Globals) { 
    this.getAllMembers();
  }

  public getAllMembers(){
    this.apiService.getAllMembers().subscribe(
      res => {
        console.log(res);
        this.members = res;
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

  authenticate(username, password) {
    console.log(username);
    console.log(password);
    for(var i=0;i<this.members.length;i++)
    {
      if (username === this.members[i].email && password === this.members[i].password) {
        sessionStorage.setItem('username', username)
        this.globals.member = this.members[i];
        localStorage.setItem("loggedMember", JSON.stringify(this.members[i]));
        console.log(this.globals.member.memberID);
        return true;
      } 
    }
    return false;
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}