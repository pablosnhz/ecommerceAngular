import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../interface/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }

  productos(){
      return this.http.get('https://fakestoreapi.com/products/')
    }

  cartProducts: { product: IProducts, quantity: number }[] = [];
  totalProductsInCart: number = 0;
  _products: BehaviorSubject<{ product: IProducts, quantity: number }[]> = new BehaviorSubject<{ product: IProducts, quantity: number }[]>([]);


  get products(){
    return this._products.asObservable();
  }

  addProduct(product: IProducts) {
    const agregado = this.cartProducts.findIndex(item => item.product.title === product.title  )

    if(agregado !== -1){
      this.cartProducts[agregado].quantity++;
    } else {
      this.cartProducts.push({ product: product, quantity:1 })
    }

    this.totalProductsInCart = this.cartProducts.reduce((total, item) => total + item.quantity, 0);
    this._products.next([...this.cartProducts]);
  }

  deleteProduct(index: number){
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }

  }


