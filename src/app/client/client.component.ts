import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../Message.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnDestroy {
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