import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  allProducts:any;

  constructor(private prodSer : ProductApiService,private cart:CartService) {
    this.prodSer.product().subscribe((res:any)=>{
      console.log('res', res)
      this.allProducts=res;
    })
   }
  ngOnInit(){
  }

  added(item :any){
    this.cart.addtoCart(item);
  }


}
