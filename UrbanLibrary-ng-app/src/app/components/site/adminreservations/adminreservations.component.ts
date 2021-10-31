import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {Reservation} from "../../../model/reservation";
import {Member} from "../../../model/member";
import {ReservationItems} from "../../../model/reservationItems";

@Component({
  selector: 'app-adminreservations',
  templateUrl: './adminreservations.component.html',
  styleUrls: ['./adminreservations.component.css',
  '../../../../assets/plugins/bootstrap/css/bootstrap.css',
  '../../../../assets/css/admin/style.css',
  '../../../../assets/css/admin/theme-black.css',
  ]
})
export class AdminreservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  members: Member[];
  reservationsItems: ReservationItems[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllReservations();
    this.getAllReservationsItems();
    this.getAllMembers();
  }

  public getAllReservations(){
    this.apiService.getAllReservations().subscribe(
      res => {
        this.reservations = res;
      },
      err => {
        alert('An error has occured');
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

  deleteReservationsItem(reservationItemsID: number) {
    this.apiService.deleteReservationsItem(reservationItemsID).subscribe(
      res => {
        location.reload();
        //TO-DO
        //aktualizacja liczby książek
      },
      err =>  {
        alert('An error has occured while deleting data.');
      }
    );
  }
}
