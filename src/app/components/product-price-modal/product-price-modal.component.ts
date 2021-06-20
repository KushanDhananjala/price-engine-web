import {Component, Inject, OnInit} from '@angular/core';
import {PriceModal} from "../../dto/price-modal";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-product-price-modal',
  templateUrl: './product-price-modal.component.html',
  styleUrls: ['./product-price-modal.component.scss']
})
export class ProductPriceModalComponent implements OnInit {

  quantity = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: PriceModal) {
  }

  ngOnInit(): void {
    this.getQuantity(this.data.cartons, this.data.units);
  }

  private getQuantity(cartons: number, units: number) {
    if (cartons > 0) {
      if (cartons === 1) {
        this.quantity += cartons + ' carton';
      } else {
        this.quantity += cartons + ' cartons';
      }
    }

    if (cartons > 0 && units > 0) {
      this.quantity += ' and ';
    }

    if (units > 0) {
      if (units === 1) {
        this.quantity += units + ' unit';
      } else {
        this.quantity += units + ' units';
      }
    }
  }
}
