import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {OrderComponent} from './order/order.component';
import {CustomerComponent} from './customer/customer.component';
import {CreateCustomerComponent} from './customer/create-customer.component';

export const router: Routes = [
	{path: '', redirectTo: 'customers', pathMatch: 'full'},
	{path: 'customers', component: CustomerComponent},
	{path: 'orders', component: OrderComponent},
	{path: 'createCustomer', component: CreateCustomerComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);