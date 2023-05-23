import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { VentaPageComponent } from './venta-page/venta-page.component';
import { ListaVentaPageComponent } from './lista-venta-page/lista-venta-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },	
  { path: 'login', component: LoginPageComponent },
  { path: 'registro', component: RegistroPageComponent },
  { path: 'venta', component: VentaPageComponent },
  { path: 'lista-venta', component: ListaVentaPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'product', component: ProductPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
