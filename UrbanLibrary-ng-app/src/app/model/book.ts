import { Author } from "./author";
import { Category } from "./category";

export interface Book {
    bookID:number;
    title:string;
    cover:string;
    imgName:string;
    description: string;
    date:Date;
    booksReadByMember: string[];
    categories: Category[];
    authors: Author[];
    reservations:string[];
    isAvailable:Boolean;
}
