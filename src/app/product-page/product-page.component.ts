import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productos: any[] = [
    // Aquí debes agregar los productos existentes o puedes obtenerlos desde un servicio o API
    // Por ejemplo:
    {
      nombre: 'Checkered Vans',
      costo: 50,
      imagen: 'https://images.vans.com/is/image/Vans/EYEBWW-HERO?$583x583$'
    },
    {
      nombre: 'Balenciaga',
      costo: 200,
      imagen: 'https://cdn.luxe.digital/media/2020/02/17134426/balenciaga-black-speed-men-sneakers-luxe-digital.jpg'
    },
    // Otros productos...
  ];

  agregarAlCarrito(producto: any) {
    // Aquí debes implementar la lógica para agregar el producto al carrito de compras
    // Puedes utilizar un servicio o componente compartido para almacenar el carrito de compras
    // Por ejemplo:
    // this.carritoService.agregarProducto(producto);
  }
  
}
