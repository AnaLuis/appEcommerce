import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartComponent } from './store/cart/cart.component';
import { PageNotFoudComponent } from './store/page-not-foud/page-not-foud.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'store',component:StoreComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  
  {
    path:'productDetail/:productId',component:ProductDetailComponent
  },
  {
    path:'',redirectTo:'/store',pathMatch:'full'
   },
   {
     path:'**',component:PageNotFoudComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
