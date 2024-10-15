import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  @Input() cartCount: number = 0;

  constructor(private getData: DataStorageService) { }
  ngOnInit(): void {
    var getVal = this.getData.getCartData();
    this.cartCount = getVal ? getVal.length : 0;
  }

}
