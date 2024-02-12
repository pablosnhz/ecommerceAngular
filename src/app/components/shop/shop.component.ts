import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  products: IProducts[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.products.subscribe(products => {
      this.products = products;
      console.log(products)
    });
  }

}
