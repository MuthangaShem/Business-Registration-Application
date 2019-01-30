import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:8080/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_kra_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_kra_number: business_kra_number
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(``);
  }

  editBusiness(id) {
    return this
            .http
            .get(`edit/${id}`);
    }

  updateBusiness(person_name, business_name, business_kra_number, id) {

    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_kra_number: business_kra_number
      };
    this
      .http
      .post(`update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`delete/${id}`);
  }
}
