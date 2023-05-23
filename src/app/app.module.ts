import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { ListaVentaPageComponent } from './lista-venta-page/lista-venta-page.component';
import { VentaPageComponent } from './venta-page/venta-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ProductPageComponent,
    LoginPageComponent,
    RegistroPageComponent,
    ListaVentaPageComponent,
    VentaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
