import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { v4 as uuidv4 } from 'uuid';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  products$?: Observable<Product[]>;
  constructor(
    private productsService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
  }

  openAddProductDialog() {
    this.dialog.open(ProductFormComponent,
      { data: { mode: 'create' }, width: '500px' })
      .beforeClosed().subscribe(formData => {
        if (!formData) {
          return;
        }
        const newProduct = { ...formData, id: uuidv4() }
        this.productsService.create(newProduct).subscribe(
          data => {
            console.log(data);
            this.products$ = this.productsService.getAll();
          });
      })
  }

  openEditDialog(product: Product) {
    this.dialog.open(ProductFormComponent, { data: { data: product, mode: 'edit' } })
      .beforeClosed().subscribe(data => {
        this.productsService.patch(data?.id, data).subscribe(response => {
          this.products$ = this.productsService.getAll();
        }
        )
      })
  }

  openDeleteDialog(product: Product) {
    this.dialog.open(DeleteDialogComponent, { data: product, width: '350px' })
      .beforeClosed().subscribe(confirm => {
        if (confirm) {
          this.productsService.delete(product.id).subscribe(
            response=> this.products$ = this.productsService.getAll()
          );
        }
      });
  }
}
