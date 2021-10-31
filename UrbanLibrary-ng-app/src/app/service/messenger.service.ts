import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private subject = new Subject();

  constructor() { }


  sendMsg(book){
    this.subject.next(book); //Triggering an event
    console.log(book);
  }

  getMsg(){
    return this.subject.asObservable();
  }

  clearMessage() {
    this.subject.next();
  }

}
