import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from './app.routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { CreateCustomerComponent } from './customer/create-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavbarComponent,
    OrderComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    Ng2FilterPipeModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
