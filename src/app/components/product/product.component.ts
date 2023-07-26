import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product: any;
@Output() productAdded = new EventEmitter();
addProductToCart(product:Product){
  this.productAdded.emit(product);
}
}
