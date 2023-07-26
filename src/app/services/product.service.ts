import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint:string;
  constructor(private http: HttpClient) {
    this.endpoint= "https://dummyjson.com/products";
  }

  fetchData():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.endpoint}`);
  }
}
