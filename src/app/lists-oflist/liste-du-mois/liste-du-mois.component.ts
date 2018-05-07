import { Component, OnInit } from '@angular/core';
import { ListeMoisService } from'../shared/liste-mois.service'
//import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from'ngx-toastr';

@Component({
  selector: 'app-liste-du-mois',
  templateUrl: './liste-du-mois.component.html',
  styleUrls: ['./liste-du-mois.component.scss']
})
export class ListeDuMoisComponent implements OnInit {
  listeTs =["Liste d'achats", "Ménage", "economie"];
  
  constructor(private ListeMS :ListeMoisService, private tostr : ToastrService, ) { }

  ngOnInit() {
   // this.listeMS.getData();
  }

}
