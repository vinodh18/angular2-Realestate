import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpTestService} from './customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [HttpTestService]
})
export class CreateCustomerComponent implements OnInit {
 public customer;
 //public customers;

  postData: string;
  name: string;
  constructor(private httpService: HttpTestService) { }
  
  onTestPost() { 
 // console.log('this.customer', this.customer) // get form data 
 	  this.httpService.submitForm(this.customer).subscribe(
      data => this.postData = JSON.stringify(this.customer),
      //error => alert(error),
      () => console.log("Finished")
    );
  } 
  ngOnInit() {
  }

}
