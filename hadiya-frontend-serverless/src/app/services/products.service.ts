import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 
    
  }

  private productApiUrl: string = environment.apiGatewayURL + "/products";


  // private products: Product[] = [
  //   new Product(
  //     "Zebronics DRIP Smart Watch with Bluetooth Calling, 4.3cm (1.69\"), 10 built-in & 100+ Watch Faces, 100+ Sport Modes, 4 built-in Games, Voice Assistant, 8 Menu UI, Fitness Health & Sleep Tracker (Black)",
  //     2500,
  //     "INR",
  //     "https://m.media-amazon.com/images/I/61mtuZCcUdL._SL1500_.jpg",
  //     "17cdb5ce-d3cf-4282-8bd1-90acbf1dcae0"
  //   )
  // ]

  public getAllProducts(limit: number, exclusiveStartKey: string | null): Observable<APIResponse>{
    // return this.http.get<APIResponse>(this.productApiUrl + '?limit=' + limit + '&startKey=' + startKey);
    var url = this.productApiUrl  + '?limit=' + limit;
    if (exclusiveStartKey) url = this.productApiUrl  + '?limit=' + limit + '&startKey=' + exclusiveStartKey;
    return this.http.get<APIResponse>(url);
  }

  public getProductById(productId: string): Observable<APIResponse>{
    return this.http.get<APIResponse>(this.productApiUrl + '?id=' + productId);
  }

  public addProduct(product: Product): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.productApiUrl, product);
  }

  public updateProduct(product: Product): Observable<APIResponse>{
    return this.http.put<APIResponse>(this.productApiUrl + '?id=' + product.id, product);
  }

  public deleteProduct(productId: string): Observable<APIResponse>{
    return this.http.delete<APIResponse>(this.productApiUrl + '?id=' + productId);
  }

}
