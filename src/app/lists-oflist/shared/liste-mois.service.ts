import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ListeMois } from './liste-mois.model';
import { NgIf } from '@angular/common';

@Injectable()
export class ListeMoisService {

  listDuMoisList : AngularFireList<any>;
  selectedListMois : ListeMois = new ListeMois();

  constructor(private firebase : AngularFireDatabase) { }
  getData(){
    this.listDuMoisList = this.firebase.list('listMoisLists');
    return this.listDuMoisList;
  }

}
