import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidationService } from 'src/app/services';
import { CustomValidators } from 'src/app/validators';
import { Product } from '../../models';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  mode: 'edit' | 'create';
  
  constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {
      data: Product,
      mode: 'edit' | 'create'
    },
  ) {
    this.mode = data.mode;
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [
        Validators.minLength(3),
        CustomValidators.whitSpace,
        Validators.required]],
      rating: [0, [
        Validators.min(0),
        Validators.required]],
      price: [0.1, [
        Validators.min(0.1),
        Validators.required]],
      discount: [0, [
        Validators.min(0),
        Validators.required]],
      shippingFee: [0, [
        Validators.min(0),
        Validators.required]],
      stock: [0, [
        Validators.min(0),
        Validators.required]],
      imageUrl: ['', [
        Validators.min(0),
        CustomValidators.whitSpace,
        Validators.required]],
      ratedByCount: [0, [
        Validators.min(0),
        Validators.required]],
      id: ['',],
    });

    if (this.data.mode === 'edit') {
      const news = { ...this.data?.data };
      this.productForm.patchValue(news);
    }
  }
  getErrorMessage(key: string) {
    const control = this.getControl(key);
    if (!control) {
      return;
    }
    return ValidationService.getErrorMessage(control);
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  private getControl(key: string) {
    const control = this.productForm?.get(key)
    return control;
  }

  submit() {
    const formData = this.productForm.getRawValue();
    this.matDialogRef.close(formData);
  }
}
