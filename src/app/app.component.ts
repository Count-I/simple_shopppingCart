import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';
  productList: any;
  constructor(
    private _productService: ProductService
  ) {
  }
  ngOnInit(): void {
    this.getProducts();


  }
  // productList = [
  //   { name: 'Z900', price: 8799 },
  //   { name: 'shubert helmet', price: 999 },
  //   { name: 'sport gloves', price: 99 }
  // ];

  getProducts() {
    this._productService.fetchData().subscribe((data: any) => {
      this.productList = data.products;
    });
  }
  cartProductList: Array<any> = [];

  addProductToCart(product: any) {
    const productExistInCart = this.cartProductList.find(
      ({ name }: any) => name === product.title
      );
      
      console.log(productExistInCart);
      
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product: any) {
    this.cartProductList = this.cartProductList.filter(({ name }: any) => {
      name != product.name;
    })
  }
}
