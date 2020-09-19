import {Book} from './book';
import {Member} from './member';

export interface Loan {
    loanID: number;
    book: Book;
    member: Member;
    dateLoaned: Date;
    dateReturned: Date;
}
