import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { ApiService } from 'src/app/shared/api.service';
import {Loan} from "../../../model/loan";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans: Loan[]
  member: Member;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(){
    this.apiService.getAllLoans().subscribe(
      res => {
        var member = JSON.parse(localStorage.getItem("loggedMember"))

        var filtered = res.filter(x=> x.member.memberID == member.memberID);

        this.loans = filtered;
        console.log(this.loans);
      },
      err =>{
        alert("An error has occured");
      }
    );
  }
}
