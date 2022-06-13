import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIService } from "src/app/services/api/api.service";
import { Item } from "../models";

@Injectable({ providedIn: 'root' })
export class ItemService extends APIService<Item>
{
  constructor(httpClient: HttpClient) {
    super(httpClient, 'items');
  }
}
