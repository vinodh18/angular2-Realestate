import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {Message} from './customer'


@Injectable()
export class HttpTestService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('http://localhost:9000/api/customers').map(
    (res) => res.json()
    );
  }

  posts_Url:string = "http://localhost:9000/api/customers";
  
   postComment(message:Message) {
       return this.http.post(this.posts_Url, message, { 
        })
       .map(res =>  res.json());     	    
    }
    
    submitForm() {
      var json = {name: name, gender: 'MALE'}; //req.body
      
      var param = 'json=' + json;
      var headers = new Headers();
      
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post('http://localhost:9000/api/customers/', 
      json).map(res => res.json());
  }

}
