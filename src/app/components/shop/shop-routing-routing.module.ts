import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { DetailsComponent } from './details/details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';

export const WithLazy: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: 'shopping', component: ShoppingCartComponent
  },
  {
    path: 'shop', component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(WithLazy)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
