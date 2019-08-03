import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../model/product-repository.service';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory=null;
  public selectedVendor=null;
  public selectedScale=null;
  public prodctsPerPage=12;
  public selectedPage=1;

  constructor(private productRepoService: ProductRepositoryService,private cart:Cart) { }

  ngOnInit() {
    //console.log (this.productRepoService.getProducts());
  }
  get products() : Product[] {
    const pageIndex=(this.selectedPage-1)*this.prodctsPerPage;

    return this.productRepoService.getProducts(this.selectedCategory,this.selectedScale,this.selectedVendor)
    .slice(pageIndex,pageIndex+ this.prodctsPerPage);
  }
  get categories() : string[] {
    return this.productRepoService.getCategories();
  }
  changeCategory(newCategory?:string){
    this.selectedCategory=newCategory;
    this.selectedPage=1;
    
  }
  changeVendor(newCategory?:string){
    this.selectedVendor=newCategory;
    this.selectedPage=1;
    
  }
  changeScale(newCategory?:string){
    this.selectedScale=newCategory;
    this.selectedPage=1;
    
  }
  get PageNumbers():number[]{
    return Array(Math.ceil(this.productRepoService.getProducts(this.selectedCategory,this.selectedScale,this.selectedVendor)
    .length/this.prodctsPerPage)).fill(0).map((x,i)=>i+1);
  }
  changePage(newNumber:number){
    this.selectedPage=newNumber;
  }
  changePAge(newNumber:number){
    this.selectedPage=newNumber
  }
  changePageSize(newSize:number){
    this.prodctsPerPage=newSize;
    this.changePage(1)

  }
  get scales() : string[] {
    return this.productRepoService.getScale();
  }
  get vendors() : string[] {
    return this.productRepoService.getVendor();
  }
  //funcion de addproducts
 addProduct(pro:Product){
    this.cart.addLine(pro)
 }
}
