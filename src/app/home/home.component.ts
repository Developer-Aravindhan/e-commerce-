import { Component, OnInit } from '@angular/core';
import { GatDataService } from '../service/gat-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  bannerImage = [
    {
      id: 1,
      img: './assets/images/banner/off.jpg'
    },
    {
      id: 2,
      img: './assets/images/banner/shop.jpg'

    },
    {
      id: 3,
      img: './assets/images/banner/online.jpg'
    }
  ]
  gatCategoriesData: any;
  gatApplianceProductData: any = [];
  gatFashionProductData: any = [];

  constructor(private gatData: GatDataService) { }

  ngOnInit(): void {
    this.gatCategoriesData = this.gatData.categoriesData;
    this.gatData.productData.filter((ele: any) => {
      if (ele.pdCategory == 'appliance') {
        this.gatApplianceProductData.push(ele);
      }
      if (ele.pdCategory == 'fashion') {
        this.gatFashionProductData.push(ele);
      }
    });
  }
}
