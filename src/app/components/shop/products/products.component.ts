import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  ngOnInit(): void {

    this.products();
  }

  constructor(private productsService: ProductsService, private route: Router ) { }

  isLoading = true;
  listaProductos: IProducts[] = [];

  products(){
    this.productsService.productos().subscribe((data) => {
      if(Array.isArray(data)) {
        this.listaProductos = data;
        this.isLoading = false;
      }
    })
  }

  addCart(productos: IProducts) {
    this.productsService.addProducts(productos, 0);
  }

  detailProduct(productId: number){
    this.route.navigate(['/details', productId]);
  }

}

