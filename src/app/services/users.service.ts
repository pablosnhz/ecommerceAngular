import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }

  usuarios(){
      return this.http.get('https://fakestoreapi.com/products/')
    }
  }


