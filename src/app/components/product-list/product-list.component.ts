import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  
})
export class ProductListComponent {
  @Input() products: any[] | undefined;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product:any){
    this.productAdded.emit(product);
  }
}
