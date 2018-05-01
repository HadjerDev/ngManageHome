import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService, private tostr : ToastrService) { }

  ngOnInit() {
    this.productService.getData();
    this.resetForm();
  }
  onSubmit(productForm : NgForm){
   
    
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
    this.tostr.success('produit enregistré','enregistrement de produit');
    
    
  }
  resetForm(productForm ?:NgForm){
    productForm.reset();

  }

}
