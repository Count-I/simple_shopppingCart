import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() products: any[] | undefined;
  @Output() productRemoved = new EventEmitter();

  total(){
    return this.products?.reduce((sum,prod)=>sum+=prod.num, 0)
  }
  removeProduct(product:any){
    this.productRemoved.emit(product);
  }
}
