import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VentaPageComponent } from './venta-page/venta-page.component';
import { HeaderComponent } from './header/header.component';
import { ProductoAgregarPageComponent } from './producto-agregar-page/producto-agregar-page.component';
import { ClienteAgregarPageComponent } from './cliente-agregar-page/cliente-agregar-page.component';
import { ClientePageComponent } from './cliente-page/cliente-page.component';
import { VentaAgregarPageComponent } from './venta-agregar-page/venta-agregar-page.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ProductPageComponent,
    LoginPageComponent,
    VentaPageComponent,
    HeaderComponent,
    ProductoAgregarPageComponent,
    ClienteAgregarPageComponent,
    ClientePageComponent,
    VentaAgregarPageComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
