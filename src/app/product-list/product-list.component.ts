import { Component, OnInit } from '@angular/core';
import productData from '../model/products.json';
import { CartService } from '../cart.service';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
interface Product {
  id: Number;
  style: String;
  price : Number;
  title: String;
  availableSizes : String[];
  currencyFormat : String;
  currencyId:String;
  description:String;
  // imageUrl: string;
  image?: string;
  installments:Number;
  isFreeShipping: Boolean ;
  sku: Number;
  quantity?: number;
}  
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  [x: string]: any;
  products : Product[] = productData;
  public productList : any ;
   constructor(private route: ActivatedRoute, private router:Router,private cartService: CartService){
  
   }

  ngOnInit(): void {
    this.cartService.getItems()
    .map((res: Product[])=>{
      this.products = res;

  } )
}

addToCart(product: any){
  this.cartService.addToCart(product);
  this.router.navigate(['/cart']);
  window.alert("your product has been added to the cart");
   }
}
