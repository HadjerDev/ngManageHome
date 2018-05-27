import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/shared/product.service';
import { Product } from '../../products/shared/product.model';
import { ToastrService } from'ngx-toastr';

@Component({
  selector: 'app-product-list-to-select',
  templateUrl: './product-list-to-select.component.html',
  styleUrls: ['./product-list-to-select.component.scss']
})
export class ProductListToSelectComponent implements OnInit {
  productList : Product[];
  constructor(private productService :ProductService, private tostr : ToastrService) { }

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
  onEdit(product:Product){
    this.productService.selectedProduct=product;
  }
  onDelete(key:string){
    this.productService.deleteProduct(key);
    this.tostr.success('Suppression de produit', 'Produit supprimé')
  }

}
