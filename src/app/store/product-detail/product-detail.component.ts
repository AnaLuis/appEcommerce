import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public proId;
  public prod:Product;
  constructor(  private route:ActivatedRoute,private service:ProductRepositoryService,
    private router:Router, private cart: Cart) {
     this.proId=this.route.snapshot.paramMap.get('productId')
     
     this.prod=this.service.getPro(this.proId);
     if(this.prod===undefined){
      this.router.navigate(['/store']);
     }
   }
  ngOnInit() {
  }

  addProduct() {
    this.cart.addLine(this.prod);
  }
}
