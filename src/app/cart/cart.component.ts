import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Observable} from "rxjs"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products : any = [];
  constructor(private cartService : CartService) { }
  
  
  ngOnInit(): void {
  
    this.cartService.getItems()
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
}
