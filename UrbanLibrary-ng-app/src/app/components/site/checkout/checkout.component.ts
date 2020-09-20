import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Member } from 'src/app/model/member';
import { Reservation } from 'src/app/model/reservation';
import { ReservationItems } from 'src/app/model/reservationItems';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  reservationItems: ReservationItems[] = []
  loggedMember: Member;

  reservation: Reservation = {
    reservationID: null,
    memberID: null,
    dateStartReservation: new Date(),
    dateEndReservation: new Date(),
    reservationsItems: null,
  }



  reservationID: number = Math.floor(Math.random() * 100000) + 1;;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loggedMember = JSON.parse(localStorage.getItem("loggedMember"));
    this.reservation.memberID = this.loggedMember.memberID;
    this.setItems();
    console.log(this.reservation);
  }

  setItems(){
    var items = JSON.parse(localStorage.getItem("cart"));
    for(var i =0 ;i<items.length;i++)
    {
      var item = {
        reservationItemsID: null,
        reservationGUID: this.reservationID,
        book: items[i],
        orderItemQuantity: 1,
      }
      this.reservationItems.push(item);
    }
  }

  confirmReservation(){
    console.log(this.reservation);
    this.reservation.reservationID = this.reservationID;
    this.apiService.postReservation(JSON.parse(JSON.stringify(this.reservation))).subscribe();

    for(var i =0 ;i<this.reservationItems.length;i++)
    {
      console.log(this.reservationItems[i]);
      this.reservationItems[i].reservationGUID = this.reservationID;
      this.apiService.postReservationItem(this.reservationItems[i]).subscribe();
    }

    localStorage.setItem("cart", null);
  }



}
