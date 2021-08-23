import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data:any =  {
    "Token": "595578CD4DBCA9B1BF58E4102F9FF3B2"
  };

  constructor( private http: HttpClient ) { }

  public get products(): Observable<any>{
    return  this.http.post(' https://www.idretail.com/ApiPanel/rest/getproductochallenge',this.data) as Observable<any>;
  }

}
