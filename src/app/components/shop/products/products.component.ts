import { Component, OnInit } from '@angular/core';
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

  constructor(private productsService: ProductsService ) { }

  listaProductos: IProducts[] = [];
  cantidadElegida: number = 1

  products(){
    this.productsService.productos().subscribe((data) => {
      if(Array.isArray(data)) {
        this.listaProductos = data;
      }
    })
  }

  onClick(productos: IProducts) {
    this.productsService.addProduct(productos);
  }

}
