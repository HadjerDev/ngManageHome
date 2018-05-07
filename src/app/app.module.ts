import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ListeDuMoisComponent } from './lists-oflist/liste-du-mois/liste-du-mois.component';
import { HomeComponent } from './home/home.component';
import { ListsOflistComponent } from './lists-oflist/lists-oflist.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    ListeDuMoisComponent,
    HomeComponent,
    ListsOflistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
