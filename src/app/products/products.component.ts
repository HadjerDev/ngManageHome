import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService, private tostr :ToastrModule) { }

  ngOnInit() {
  }

}
