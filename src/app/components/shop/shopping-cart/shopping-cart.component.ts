import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  products: IProducts[] = [];
  total: number = 0;

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.productsService.products.subscribe(products => {
      this.products = products
      console.log(products)

    this.suma();
    })
  }

  onClickDelete(i: number){
    this.productsService.deleteProduct(i);
  }

  suma(){
    this.productsService.products.pipe(map( products => {
      return products.reduce((prev, curr) => prev + curr.price, 0 )
    })).subscribe( val => {
      this.total = val
    })
  }

}
