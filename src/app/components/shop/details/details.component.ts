import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMerch } from 'src/app/interface/merch';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  productoId: number = 0;
  productDetails: IMerch | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService ){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productoId = +params['id'];

      this.productsDetails(this.productoId);
    })
  }

  productsDetails(productId: number){
    this.productService.merchDetails(productId).subscribe(
      (product) => {
        this.productDetails = product;
      }
    )
  }

  addCart(product: IMerch){
    this.productService.addProduct(product);
  }

}



