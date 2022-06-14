import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  delete(product: Product){
    this.deleteEvent.emit(product);
  }

  edit(product: Product){
    this.editEvent.emit(product);
  }
}
