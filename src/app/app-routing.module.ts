import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { PnfComponent } from './component/pnf/pnf.component';
import { ProductsComponent } from './component/products/products.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'admin', component:AdminComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [ProductsComponent,CartComponent,AdminComponent,LoginComponent,SignupComponent,PnfComponent];
