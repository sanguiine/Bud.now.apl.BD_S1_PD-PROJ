import { Reservation } from './reservation';
import { Book } from './book';
export interface ReservationItems{
    reservationItemsID: number,
    reservationGUID: number,
    book: Book,
    orderItemQuantity: number,
}