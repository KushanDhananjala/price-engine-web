import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../dto/product";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {environment} from "../../environments/environment";

const PRODUCTS_URL = '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getProducts(): Observable<Product[]> {
    return this.get(environment.apiUrl + PRODUCTS_URL);
  }
}
