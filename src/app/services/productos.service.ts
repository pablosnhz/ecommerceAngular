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

  cartProducts: IProducts[] = [];

  _products: BehaviorSubject<IProducts[]> = new BehaviorSubject<IProducts[]>([]);

  get products(){
    return this._products.asObservable();
  }

  addProduct(product: IProducts){
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }

  deleteProduct(index: number){
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }

  }


