import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ListsOflistComponent } from './lists-oflist/lists-oflist.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },

  {
    path : 'products',
    component: ProductsComponent
  },

  {
    path : 'listOfList',
    component : ListsOflistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
