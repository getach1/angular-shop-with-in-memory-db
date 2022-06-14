import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './features/products/pages/products-list/products-list.component';
import { DataService } from './services/data/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './features/products/components/product-form/product-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ProductItemComponent } from './features/products/components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsListComponent,
    ProductFormComponent,
    ProductDetailComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    HttpClientModule,

    // material
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,


    // third party
    InMemoryWebApiModule.forRoot(DataService),

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
