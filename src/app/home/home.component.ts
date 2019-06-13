import { Component, OnInit } from '@angular/core';
import {MessageService} from '../Message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
textMessage: string;

sendMessage = (): void =>{
  console.log(this.textMessage)
  this.messageService.sendMessage(this.textMessage);
}


  constructor( private messageService: MessageService ) {

   }

  ngOnInit() {
  }

}