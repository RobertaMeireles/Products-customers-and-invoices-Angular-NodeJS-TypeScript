import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from'@angular/material/list'; //modulo para listar itens no header
import {MatCardModule} from'@angular/material/card'; //modulo para icones do material
import {MatButtonModule} from '@angular/material/button' //modulo do material para botoes 
import { MatSnackBarModule } from '@angular/material/snack-bar'; //msg avisando que foi cadastrado
import { MatSelectModule } from '@angular/material/select';

//modulos para trabalhar com formulários
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 


import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CustomersCrudComponent } from './views/customers-crud/customers-crud.component';
import { FactureCrudComponent } from './views/facture-crud/facture-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { FactureCreateComponent } from './components/facture-create/facture-create.component';
import { CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import { LoginComponent } from './views/login/login.component'

import { HttpClientModule } from '@angular/common/http';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// Configurar o preço
import localePt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import { CustomerReadComponent } from './components/customer-read/customer-read.component';
import { FactureReadComponent } from './components/facture-read/facture-read.component';
import { FactureDetailsComponent } from './components/facture-details/facture-details.component'
import { FactureProductsComponent } from './components/facture-create/products/facture-products/facture-products.component'
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { InvoiceDeleteComponent } from './components/invoice-delete/invoice-delete.component';

import { RegisterComponent } from './views/register/register/register.component';  

// Resolvers
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductByIdResolver } from './resolvers/product-by-id.resolver'
import { CustomersResolver } from './resolvers/customers.resolver'
import { CustomerByIdResolver } from './resolvers/customer-by-id.resolver'
import { InvoicesResolver } from './resolvers/invoices.resolver';
import { InvoiceByIdResolver } from './resolvers/invoice-by-id.resolver'


// token:
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('token');
}

registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    CustomersCrudComponent,
    FactureCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    FactureCreateComponent,
    CustomerCreateComponent,
    LoginComponent,
    ProductReadComponent,
    CustomerReadComponent,
    FactureReadComponent,
    ProductUpdateComponent,
    CustomerUpdateComponent,
    ProductDeleteComponent,
    CustomerDeleteComponent,
    InvoiceDeleteComponent,
    RegisterComponent,
    FactureDetailsComponent,
    FactureProductsComponent,
    FactureProductsComponent,
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    JwtModule.forRoot({
      config: {
         // tokenGetter: tokenGetter,
         tokenGetter,
         allowedDomains: ['localhost:3000'],
         disallowedRoutes: ['localhost:3000/api/auth']
      }
   })

  ],
  providers:[
    ProductsResolver,
    ProductByIdResolver,
    CustomersResolver,
    CustomerByIdResolver,
    InvoicesResolver,
    InvoiceByIdResolver,
    {
    provide: LOCALE_ID,
    useValue:'pt-pt'
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
