import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products = this.cartService.getProductsData();
    this.grandTotal=this.cartService.totalPrice;
    console.log('this.grandTotal', this.grandTotal)
  }

  removeItem(index:number){
    this.products.splice(index,1);
  }

  emptycart(){
    this.products=[];
  }

}
