import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

	uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_kra_number){
  	const obj ={
  		person_name: person_name,
  	  	business_name: business_name,
  	  	business_kra_number: business_kra_number
  	  };
  	console.log(obj);
  	this.http.post(`${this.uri}/add`, obj)
  			.subscribe(res => console.log('Done!!'));
  };

  getBusinesses(){
    return this.http.get(`${this.uri}`);
  };

  editBusiness(id){
    return this.http.get(`${this.uri}/edit/${id}`)
  }
}
