import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from './product.model';
import { NgIf } from '@angular/common';


@Injectable()
export class ProductService {
  productList:AngularFireList<any>;
  selectedProduct :Product= new Product();

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.productList = this.firebase.list('products');
    return this.productList;
  }//getDate() it makes a initial list for on the firebase where other individual products will be saved

  insertProduct(product:Product){
    this.productList.push({
      productType: product.productType,
      productName: product.productName,
      productPrice: product.productPrice,
     // productQtt: product.productQtt
    });
 
  }

  updateProduct(product:Product){
    this.productList.update(product.$key,{
      productType: product.productType,
      productName: product.productName,
      productPrice: product.productPrice,
     // productQtt: product.productQtt
    });
  }

  deleteProduct(key:string){
    this.productList.remove(key);
  }
}
