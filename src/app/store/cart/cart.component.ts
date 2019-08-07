import { Component, OnInit } from '@angular/core';
import { Cart, CartLine } from 'src/app/model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart:Cart) { 
    
  }

  ngOnInit() {
  }
  get lista() {
    return this.cart.listProd();
  }
  get cartItems() {
    return this.cart.listProd();
  }
  editCantidad(prod: CartLine, act: string){
    this.cart.editCantidad(prod, act);
    this.cart.recalculate()
  }
  deletCart(index: number){
    this.cart.deletCart(index);
    this.cart.recalculate();
  }
}
