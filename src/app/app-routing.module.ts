import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailsComponent } from './components/shop/details/details.component';
import { ShoppingCartComponent } from './components/shop/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/shop/products/products.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent, children: [
      { path: '', component: MainPageComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'shopping', component: ShoppingCartComponent },
      { path: 'shop', component: ProductsComponent }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
