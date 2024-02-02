import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/shop/products/products.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'shop', component: ShopComponent,
    children: [
      { path: '',  component: MainPageComponent }
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
