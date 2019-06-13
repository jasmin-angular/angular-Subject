import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from 'rxjs'

@Injectable()
export class MessageService {
  private subject = new BehaviorSubject<any>('s');
  constructor() { }

  sendMessage = (inMessage: string): void =>{
    this.subject.next({text: inMessage});
  }
  clearMessage = () : void => {
    this.subject.next('')
  }
  
   getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
 

}