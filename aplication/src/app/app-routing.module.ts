import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CustomersCrudComponent } from './views/customers-crud/customers-crud.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { FactureCrudComponent } from './views/facture-crud/facture-crud.component';
import { FactureCreateComponent } from './components/facture-create/facture-create.component';
import { FactureDetailsComponent } from './components/facture-details/facture-details.component'
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { InvoiceDeleteComponent } from './components/invoice-delete/invoice-delete.component';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register/register.component';

import { ProductsResolver } from './resolvers/products.resolver';
import { ProductByIdResolver } from './resolvers/product-by-id.resolver';
import { CustomersResolver } from './resolvers/customers.resolver';
import { CustomerByIdResolver } from './resolvers/customer-by-id.resolver';
import { InvoicesResolver } from './resolvers/invoices.resolver';
import { InvoiceByIdResolver } from './resolvers/invoice-by-id.resolver';

import { AuthGuard } from './models-services/guards/auth.guard'


//colocar as rotas
const routes: Routes = [

  //ROTA HOME
  {
  //Rota home
    path: "home",
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  //ROTA PRODUTOS
  {
  //rota produtos CRUD
    path:"products",
    component: ProductCrudComponent,
    resolve: { productsResolver :  ProductsResolver},
    canActivate:[AuthGuard]
  },
  {
  //rota para formulário para criar novo product
    path:"product/create",
    component: ProductCreateComponent,
    canActivate:[AuthGuard]
  },
  {
  //rota para atulizar um product
    path:"product/update/:id",
    component: ProductUpdateComponent,
    resolve: { productByIdResolver :  ProductByIdResolver},
    canActivate:[AuthGuard]
  },
  {
    //rota para deletar um product
      path:"product/delete/:id",
      component: ProductDeleteComponent,
      resolve: { productByIdResolver :  ProductByIdResolver},
      canActivate:[AuthGuard]
  },





  //ROTA CUSTOMERS
  {
  //rota customers CRUD
    path:"customers",
    component: CustomersCrudComponent,
    resolve: { customersResolver :  CustomersResolver},
    canActivate:[AuthGuard]
  },
  {
  //rota para formulário para criar novo customer
    path:"customer/create",
    component: CustomerCreateComponent,
    canActivate:[AuthGuard]
  },
  {
    //rota para atulizar um customer
    path:"customer/update/:id",
    component: CustomerUpdateComponent,
    resolve: { customerByIdResolver :  CustomerByIdResolver},
    canActivate:[AuthGuard]
  },
  {
    //rota para deletar um product
      path:"customer/delete/:id",
      component: CustomerDeleteComponent,
      resolve: { customerByIdResolver :  CustomerByIdResolver},
      canActivate:[AuthGuard]
  },



  
  //ROTA PARA FATURAS
  {
  //rota para faturas
    path:"invoices",
    component: FactureCrudComponent,
    resolve: { invoicesResolver :  InvoicesResolver},
    canActivate:[AuthGuard]
  },
  {
  //rota para formulário para criar nova facture
    path:"invoices/create",
    component: FactureCreateComponent,
    resolve: { customersResolver :  CustomersResolver, productsResolver :  ProductsResolver },
    canActivate:[AuthGuard]
  },
  {
    //rota para deletar um invoice
    path:"invoices/delete/:id",
    component: InvoiceDeleteComponent,
    canActivate:[AuthGuard]
  },
  {
    //rota para deletar um invoice
    path:"invoices/details/:id",
    component: FactureDetailsComponent,
    resolve: { invoiceByIdResolver :  InvoiceByIdResolver},
    canActivate:[AuthGuard]
  },

    //LOGIN
  {
    //Rota login
    path: "",
    component: LoginComponent
  },

    //REGISTER
  { 
    //Rota Rgister
    path: 'register', 
    component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
