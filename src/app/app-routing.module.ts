import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ClientePageComponent} from './cliente-page/cliente-page.component';
import { ClienteAgregarPageComponent} from './cliente-agregar-page/cliente-agregar-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductoAgregarPageComponent} from './producto-agregar-page/producto-agregar-page.component';
import { VentaPageComponent } from './venta-page/venta-page.component';
import { VentaAgregarPageComponent} from './venta-agregar-page/venta-agregar-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },	
  { path: 'contact', component: ContactPageComponent },
  { path: 'cliente', component: ClientePageComponent },
  { path: 'cliente-agregar', component: ClienteAgregarPageComponent },	
  { path: 'product', component: ProductPageComponent },
  { path: 'product-agregar', component: ProductoAgregarPageComponent },
  { path: 'venta', component: VentaPageComponent },
  { path: 'venta-agregar', component: VentaAgregarPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




