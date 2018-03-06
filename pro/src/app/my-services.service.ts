import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyServicesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('/product');
  }	

}
