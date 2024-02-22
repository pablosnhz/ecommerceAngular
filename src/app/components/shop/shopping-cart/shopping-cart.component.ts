import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  products: { product: IProducts; quantity: number; }[] = [];
  total: number = 0;

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.productsService.products.subscribe(products => {
      this.products = products

    this.suma();
    })
  }

  onClickDelete(i: number){
    this.productsService.deleteProduct(i);
  }

  suma(){
    this.productsService.products.pipe(map( products => {
      return products.reduce((total, item) => total + (item.product.price * item.quantity), 0 )
    })).subscribe( val => {
      this.total = val
    })
  }

  incrementQuantity(index: number) {
    this.products[index].quantity++;
    console.log('sumando productos', this.products)

    this.productsService.updateCart()
    this.suma();
  }

  decrementQuantity(index: number) {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;

      this.productsService.updateCart()
      this.suma();
    }
  }



















}
