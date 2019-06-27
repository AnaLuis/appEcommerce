import { Injectable } from '@angular/core';
import { ProductDatasourceService } from './product-datasource.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
private products:Product[]=[];


  constructor(private dataSourceService:ProductDatasourceService) { 
    dataSourceService.getProducts()
    .subscribe((response)=>{
      this.products=response['products'];
      console.log(this.products)

    });
  }
  getProducts():Product[]{
    return this.products;
  }
}
