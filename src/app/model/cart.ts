import { Injectable } from '@angular/core';
import{Product} from './product';

@Injectable({providedIn: 'root'})
export class Cart {
    private lines:CartLine[]=[];
    public itemCount=0;
    public cartPrice=0;
    addLine(product:Product,quantity:number=1){
        const line=this.lines.find(line=>line.product.productCode===product.productCode);
        if(line==undefined){
            this.lines.push(new CartLine(product,quantity))
        }else{
        line.quantity=quantity+line.quantity;
        //line.quantity +=quantity;
        }
        this.recalculate();
}
recalculate(){
    this.itemCount=0;
    this.cartPrice=0;
    this.lines.forEach(l=>{
        this.itemCount +=l.quantity;
        this.cartPrice +=(l.quantity*l.product.MSRP);
    })
}
listProd(){
    return this.lines;
}
editCantidad(line: CartLine, act: string){
    if (act == "mas") {
        line.quantity++;
    } else {
        line.quantity--;
    }
}

deletCart(i: number){
    this.lines.splice(i, 1);
}

}
export class CartLine{
    constructor(public product:Product,public quantity:number){}
    get lineTotal(){
    return this.quantity* this.product.MSRP;
    }
}
