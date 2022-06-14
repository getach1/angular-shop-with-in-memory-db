
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product$ = this.productService.get(id!);
    });
  }

  openEditDialog(product: Product) {
    this.dialog.open(ProductFormComponent, { data: { data: product, mode: 'edit' } })
      .beforeClosed().subscribe(data => {
        this.productService.patch(data?.id, data).subscribe(response => {
          this.product$ = this.productService.get(data.id);
        }
        )
      })
  }

  openDeleteDialog(product: Product) {
    this.dialog.open(DeleteDialogComponent, { data: product, width: '350px' })
      .beforeClosed().subscribe(confirm => {
        if (confirm) {
          this.productService.delete(product.id);
          this.router.navigateByUrl('/products');
        }
      });
  }
}
