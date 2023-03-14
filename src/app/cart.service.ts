import { Injectable } from '@angular/core';
import productData from 'C:/shoppingProducts/app/src/products.json'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any[] =[];
  private productList = new BehaviorSubject<any[]>([]);

  setProduct(product : any){
    this.items.push(...product);
    this.productList.next(product);
  }
  addToCart(product:any){
     this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  removeCartItem(product: any){
    this.items.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.items.splice(index,1);
      }
    })
    this.productList.next(this.items);
  }
}
