import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatDataService } from '../service/gat-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  gatParamValue: any;
  gatProductData: any = [];
  filterProductData: any = [];
  getSucCateOP: any = [];
  constructor(private router: ActivatedRoute, private gatData: GatDataService) { }

  ngOnInit(): void {
    this.gatParamValue = this.router.snapshot.paramMap.get('name');

    this.gatData.productData.filter((ele: any) => {
      if (ele.pdCategory == this.gatParamValue) {
        this.gatProductData.push(ele);
        this.filterProductData.push(ele);
      }
    });

    this.gatData.subCategorisFilterData.filter((ele: any) => {
      if (ele.categories == this.gatParamValue) {
        this.getSucCateOP.push(ele)
      }
    })

  }
  filterSelect(data: any) {
    this.filterProductData = [];
    var getFilterValue: any = data.target.value;

    if (getFilterValue != 'all') {
      this.gatData.productData.filter((ele) => {
        if (ele.pdSubCategory == getFilterValue) {
          this.filterProductData.push(ele);
        }

      });
    } else {
      this.filterProductData = this.gatProductData;
    }
  }

}
