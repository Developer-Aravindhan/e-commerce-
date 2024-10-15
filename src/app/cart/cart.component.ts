import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  getCartData: any;
  stroeCartArray: any = [];
  totalAmount: number = 0;
  totalCart: number = 0;

  constructor(private dataStroage: DataStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getCartData = this.dataStroage.getCartData();
    this.totalCart = this.getCartData ? this.getCartData.length : 0;
    if (this.getCartData) {
      this.getCartData.filter((ele: any) => {
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
    }

  }

  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cart-data');
    this.stroeCartArray = [];
    this.getCartData.filter((ele: any) => {
      if (ele.pdId != data.pdId) {
        this.stroeCartArray.push(ele);
        this.totalAmount = ele.pdPrice + this.totalAmount;

      }
    });
    this.dataStroage.storeCartData(this.stroeCartArray);
    this.getCartData = this.dataStroage.getCartData();
    this.totalCart = this.getCartData.length;
  }

  plusMinusCount(data: any, type: any) {
    this.stroeCartArray = [];
    var plusMinusValue = data.plusMinusCounter;
    this.totalAmount = 0;

    if (type == 'minus') {
      let minusCount = plusMinusValue - 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = minusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
      this.stroeCartArray = this.getCartData;
      this.dataStroage.storeCartData(this.stroeCartArray);
      this.getCartData = this.dataStroage.getCartData();
    }
    if (type == 'plus') {
      let minusCount = plusMinusValue + 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = minusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
      this.stroeCartArray = this.getCartData;
      this.dataStroage.storeCartData(this.stroeCartArray);
      this.getCartData = this.dataStroage.getCartData();
    }
  }
  orderClick() {
    localStorage.removeItem('cart-data');
    this.router.navigate(['/']);
  }
}
