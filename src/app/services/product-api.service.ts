import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {


  constructor(private http : HttpClient) { 
  }

  // product(){
  //   return this.http.get('https://fakestoreapi.com/products')
  // }
  product(){
    return this.http.get('./../../../../assets/prod.json')
  }
}
