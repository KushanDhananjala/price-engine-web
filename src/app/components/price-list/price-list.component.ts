import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../dto/product";
import {ProductService} from "../../services/product.service";
import {ProductPriceService} from "../../services/product-price.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {ProductPrice} from "../../dto/product-price";

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})

export class PriceListComponent implements OnInit {

  products: Product[] = [];
  productsPrices: ProductPrice[] = [];
  selectedProductId!: number;
  selectedProduct!: Product | undefined;
  dataSource: any;

  displayedColumns: string[] = ['units', 'price'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService, private productPriceService: ProductPriceService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  loadProductPrices() {
    this.selectedProduct = this.products.find(product => product.id == this.selectedProductId);
    this.productPriceService.getProductPrices(this.selectedProductId).subscribe(result => {
      this.productsPrices = result;
      this.dataSource = new MatTableDataSource<ProductPrice>(this.productsPrices);
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }

  private getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    }, error => {
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }

}
