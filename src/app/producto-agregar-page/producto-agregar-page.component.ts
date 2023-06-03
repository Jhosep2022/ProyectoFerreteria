import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-agregar-page',
  templateUrl: './producto-agregar-page.component.html',
  styleUrls: ['./producto-agregar-page.component.css']
})
export class ProductoAgregarPageComponent {
  nombreProducto: string = '';
  costoUnidad: number = 0;
  cantidad: number = 0;
  descripcion: string = '';

  agregarProducto() {
    // Aquí debes escribir el código para agregar el producto a tu lista de productos
    // Puedes crear un objeto Producto con los datos ingresados y agregarlo a un array de productos
    // Por ejemplo:
    const producto = {
      nombre: this.nombreProducto,
      costo: this.costoUnidad,
      cantidad: this.cantidad,
      descripcion: this.descripcion,
      imagen: 'URL_DE_LA_IMAGEN' // Reemplaza esto con la URL real de la imagen
    };

    // Agregar el producto al array de productos (puedes almacenarlos en un servicio o componente compartido)
    // Ejemplo:
    // this.productosService.agregarProducto(producto);
    // Otra opción es emitir un evento para que otro componente lo capture y lo añada a la lista de productos

    // Luego de agregar el producto, puedes limpiar los campos del formulario
    this.nombreProducto = '';
    this.costoUnidad = 0;
    this.cantidad = 0;
    this.descripcion = '';
  }
}
