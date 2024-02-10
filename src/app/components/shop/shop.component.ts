import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IProducts } from 'src/app/interface/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private serviceUser:UsersService){}

  listaProducts: IProducts[] = []

  ngOnInit(): void {
  this.serviceUser.usuarios()
    .subscribe(
      (data: any) => {
        console.log(data);
        if (Array.isArray(data)) {
          this.listaProducts = data;
        }
      });
  }

}
