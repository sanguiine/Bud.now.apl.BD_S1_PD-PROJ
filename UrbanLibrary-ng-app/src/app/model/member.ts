import { Book } from "./book";
export interface Member{
    memberID: number;
    firstNname: string;
    lastName: string;
    birthDate: Date;
    city: string;
    zipCode: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: string;
    bookReadByMember: Book[];
    bookReserved: Book[];
    loanlist: [];
}
