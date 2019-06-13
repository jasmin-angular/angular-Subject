import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MessageService } from './Message.service';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { Client1Component } from './client1/client1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ClientComponent, Client1Component ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService]
})
export class AppModule { }
