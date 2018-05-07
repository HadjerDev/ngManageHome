import { Component, OnInit } from '@angular/core';
import { ListeMoisService } from './shared/liste-mois.service';
import { ProductService } from '../products/shared/product.service';

@Component({
  selector: 'app-lists-oflist',
  templateUrl: './lists-oflist.component.html',
  styleUrls: ['./lists-oflist.component.scss'],
  providers:[ListeMoisService, ProductService]
})
export class ListsOflistComponent implements OnInit {

  constructor(private listOF :ListeMoisService, private productService: ProductService) {}

  ngOnInit() {
  }

}
