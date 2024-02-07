import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopsRoutingModule } from './components/shop/shop.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { CardMainComponent } from './components/main-page/card-main/card-main.component';
import { CardSecondaryComponent } from './components/main-page/card-secondary/card-secondary.component';
import { ShoppingCartComponent } from './components/shop/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/shop/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    CardMainComponent,
    CardSecondaryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ShopsRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
