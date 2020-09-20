import { ReservationItems } from "./reservationItems";
import { Member } from './member';

export interface Reservation{
    reservationID: number,
    memberID: number,
    dateStartReservation: Date,
    dateEndReservation: Date,
    reservationsItems: null,
}
