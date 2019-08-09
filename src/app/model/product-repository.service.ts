import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
private products:Product[]=[];
private categories:string[]=[];
private scale:string[]=[];
private vendor:string[]=[];


  constructor(private dataSourceService:ProductDatasourceService) { 
    dataSourceService.getProducts()
    .subscribe((response)=>{
      this.products=response['products'];
      //arreglo de productos que tiene todos sus datos
                                                //extre todos los product Line
      this.categories=response['products'].map(p=>p.productLine).filter((c,index,array)=>array.indexOf(c)===index).sort();
      console.log(this.categories)
      this.scale=response['products'].map(p=>p.productScale).filter((c,index,array)=>array.indexOf(c)===index).sort();
      console.log(this.scale)
      this.vendor=response['products'].map(p=>p.productVendor).filter((c,index,array)=>array.indexOf(c)===index).sort();
      console.log(this.vendor)

    });
  }
  getProducts(productLine:string= null,productScale:string= null,productVendor:string= null):Product[]{
    return this.products.filter((p)=>productLine== null ||p.productLine===productLine)
    .filter((p)=>productScale== null ||p.productScale===productScale)
    .filter((p)=>productVendor== null ||p.productVendor===productVendor) ;

  }
  getCategories():string[]{
    return this.categories;
  }
  
  getScale():string[]{
    return this.scale;
  }
  getVendor():string[]{
    return this.vendor;
  }
  getPro(productCode:string):Product{
  return this.products.find(p=>p.productCode===productCode)

  }
}
