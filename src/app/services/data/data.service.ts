import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Item } from "../../features/item/models";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let items: Item[] = [
      {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 1,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      },
      {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 2,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 20
      },
      {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 3,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 0.5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 4.3,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      }, {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 3.5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 10
      },
      {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 4,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      },
      {
        discount: 0,
        imageUrls: [
          'https://i.ebayimg.com/images/g/GcEAAOSwZ~peNtQQ/s-l640.jpg',
          'https://i.ebayimg.com/images/g/6mcAAOSwYuFinmr~/s-l640.jpg',
          'https://i.ebayimg.com/images/g/O7MAAOSwnQFinmsG/s-l64.jpg'
        ],
        name: 'Apple Watch Series 5 Nike+ 44mm Silver Aluminum Case w/ GPS+ Cellular Unlocked',
        price: 100,
        rating: 5,
        shippingFee: 0,
        stock: 12,
        ratedByCount: 11
      }
    ];

    return { items };
  }
}
