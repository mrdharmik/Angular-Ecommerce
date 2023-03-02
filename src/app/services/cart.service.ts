import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: Array<any> = []
  totalPrice: any;

  constructor() { }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.getTotalPrice();
    console.log('this.cartItemList', this.cartItemList)
  }

  getProductsData(): any {
    console.log('cartItemList.length', this.cartItemList.length)
    return this.cartItemList;
  }
  // getProducts() {
  //   return this.productList.asObservable();
  // }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  // addtoCart(product: any) {
  //   this.cartItemList.push(product);
  //   // this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log('Product Detail this.cartItemList', this.cartItemList)
  // }
  getTotalPrice(): any {
    let grandTotal = 0;

    this.cartItemList.map((a: any) => {
      grandTotal += a.price;
    })
    this.totalPrice = grandTotal
  }

  total() {
    return this.totalPrice;
  }
  // removeCartItem(product: any) {
  //   this.cartItemList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   })
  // }
  // removeAllCart() {
  //   this.cartItemList = []
  // }
}
