import { Component, OnInit } from '@angular/core';
import { ListeMoisService } from'../shared/liste-mois.service'
//import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from'ngx-toastr';
import { ProductListToSelectComponent } from '../product-list-to-select/product-list-to-select.component';
import { element } from 'protractor';

@Component({
  selector: 'app-liste-du-mois',
  templateUrl: './liste-du-mois.component.html',
  styleUrls: ['./liste-du-mois.component.scss']
})
export class ListeDuMoisComponent implements OnInit {
 //listeTs =["Liste dachats", "Ménage", "Economie"];
 listeTs: any[] = [
   {option:"Liste d'achats"},
   {option:"Ménage"},
   {option:"Economie"}
 ];
  productListToSelect =  ProductListToSelectComponent;
  constructor(private ListeMS :ListeMoisService, private tostr : ToastrService, ) { }

  ngOnInit() {
   // this.listeMS.getData();
  
  }

 

}
