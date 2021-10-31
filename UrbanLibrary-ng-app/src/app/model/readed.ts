import { Book } from "./book";
import { Member } from "./member";
export interface ReadedByMember{
    readID: number,
    books: Book,
    member: Member,
    rate: number,
}