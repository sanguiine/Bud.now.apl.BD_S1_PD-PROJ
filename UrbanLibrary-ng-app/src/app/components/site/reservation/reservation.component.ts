import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { Reservation } from 'src/app/model/reservation';
import { ReservationItems } from 'src/app/model/reservationItems';
import { ApiService } from 'src/app/shared/api.service';
import { Book } from 'src/app/model/book';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[]
  member: Member;
  reservationsItems: ReservationItems[];


  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.getAllReservations();
    this.getAllReservationsItems();
  }

  getAllReservations(){
    this.apiService.getAllReservations().subscribe(
      res => {
        var member = JSON.parse(localStorage.getItem("loggedMember"))
        
        var filtered = res.filter(x=> x.memberID == member.memberID);

        this.reservations = filtered;
        console.log(this.reservations);
      },
      err =>{
        alert("An error has occured");
      }
    );
  }

  getAllReservationsItems(){
    this.apiService.getAllReservationsItems().subscribe(
      res => {
        this.reservationsItems = res;
        console.log(this.reservationsItems);
      },
      err =>{
        alert("An error has occured");
      }
    );
  }


}
