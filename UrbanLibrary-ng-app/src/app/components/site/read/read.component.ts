import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../shared/api.service"
import { ReadedByMember } from "../../../model/readed";
import { Globals } from 'src/app/model/globals';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  member: Member;

  constructor(private apiService: ApiService, public globals: Globals) { }

  ngOnInit(): void {
    this.member = JSON.parse(localStorage.getItem("loggedMember"));
  }

  deleteReaded(bookID){
    for(var i =0; i<this.member.bookReadByMember.length;i++)
    {
      if(this.member.bookReadByMember[i].bookID == bookID)
      {
        console.log(this.member.bookReadByMember[i]);
        this.member.bookReadByMember.splice(i,1);
        console.log(this.member.bookReadByMember);
      }
    }
    console.log(this.member);
    localStorage.clear();
    localStorage.setItem("loggedMember", JSON.stringify(this.member));
    this.updateMember(this.member);
    
  }

  updateMember(member){
    this.apiService.postMember(member).subscribe();
  }




}
