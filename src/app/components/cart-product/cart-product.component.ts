import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input() product:any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product:any){
    if(this.product.num===0){
      this.productRemoved.emit(this.product);
    }
  }
}
