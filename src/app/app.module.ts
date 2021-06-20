import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './main-layout/footer/footer.component';
import {PriceListComponent} from './components/price-list/price-list.component';
import {PriceCalculatorComponent} from './components/price-calculator/price-calculator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {CardsModule, ModalModule} from "angular-bootstrap-md";
import {NavigationModule} from "./main-layout/navigation/navigation.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProductService} from "./services/product.service";
import {ProductPriceService} from "./services/product-price.service";
import {ProductPriceModalComponent} from './components/product-price-modal/product-price-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PriceListComponent,
    PriceCalculatorComponent,
    NotFoundComponent,
    ProductPriceModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatBadgeModule,
    MatChipsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    CardsModule,
    NavigationModule,
    MatPaginatorModule,
    ModalModule
  ],
  providers: [
    ProductService,
    ProductPriceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
