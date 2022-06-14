import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIService } from "src/app/services/api/api.service";
import { Product } from "../models";

@Injectable({ providedIn: 'root' })
export class ProductService extends APIService<Product>
{
  constructor(httpClient: HttpClient) {
    super(httpClient, 'products');
  }
}
