import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../Message.service';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnDestroy {

  message: any;
  subscription: Subscription;


  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
    .subscribe(message=> {this.message = message.text;});

   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}