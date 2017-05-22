import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpTestService} from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [HttpTestService]
})

export class CustomerComponent implements OnInit {
	//getData: string;
	//postData: string;
	
	users: string;
	getUsers: string;
	constructor(private httpService: HttpTestService) {}
	
	// Fileter Option

	userFilter: any = { name: '', email: ''};
	
	onTestGet() {
		

		this.httpService.fetchData().subscribe(
    		data => this.users = data.response.customers
    	);
	}
	

  ngOnInit() {
  	this.onTestGet();
  	}

}


