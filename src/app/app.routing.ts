import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './features/products/pages/products-list/products-list.component';
import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
