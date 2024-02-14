import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../interface/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
      this.cartProducts = JSON.parse(storedCart)

      this.updateCart();
    }
  }

  productos(){
      return this.http.get('https://fakestoreapi.com/products/')
    }

  merch(){
    return this.http.get('../../assets/merch.json')
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


    this.updateCart();
  }

  deleteProduct(index: number){
    this.cartProducts.splice(index, 1);

    this.updateCart();
  }

  updateCart(){
    this._products.next([...this.cartProducts]);
    this.totalProductsInCart = this.cartProducts.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  }


