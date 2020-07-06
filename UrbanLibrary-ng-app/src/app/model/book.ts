export interface Book {
    bookID:number;
    title:string;
    cover:string;
    imgName:string;
    description: string;
    date:Date;
    booksReadByMember: string[];
    categories:string[];
    authors:string[];
    reservations:string[];
    isAvailable:boolean;
}