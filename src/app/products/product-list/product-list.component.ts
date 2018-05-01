import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { element } from 'protractor';
import { ToastrService } from'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList : Product[];

  constructor(private productService : ProductService , private tostr : ToastrService) { }

  ngOnInit() {
    var x = this.productService.getData();
    x.snapshotChanges().subscribe(item=>{
      this.productList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productList.push(y as Product);

      });

    });
  }

}
