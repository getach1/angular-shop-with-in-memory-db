import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "../../features/products/models";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let products: Product[] = [
      {
        id: '0',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 1,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      },
      {
        id: '1',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 2,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 20
      },
      {
        id: '2',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 3,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        id: '3',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 0.5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        id: '4',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 4.3,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        id: '5',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 3.5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      },
      {
        id: '6',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 4,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      },
      {
        id: '7',
        discount: 0,
        imageUrl: 'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      }
    ];

    return { products };
  }
}
