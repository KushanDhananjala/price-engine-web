import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductPrice} from "../dto/product-price";

const PRODUCT_PRICE_URL = '/products/price';
const PRODUCT_PRICE_LIST_URL = '/products/price/list';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getProductPrices(productId: number): Observable<ProductPrice[]> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_LIST_URL + '?productId=' + productId);
  }

  getProductPrice(productId: number, quantity: number): Observable<ProductPrice> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_URL + '?productId=' + productId + '&quantity=' + quantity);
  }

}
