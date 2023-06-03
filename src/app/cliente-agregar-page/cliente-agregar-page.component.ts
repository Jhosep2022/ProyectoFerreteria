import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-agregar-page',
  templateUrl: './cliente-agregar-page.component.html',
  styleUrls: ['./cliente-agregar-page.component.css']
})
export class ClienteAgregarPageComponent {
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private router: Router, private clienteService: ClienteService) {}

  agregarCliente() {
    const nuevoCliente: Cliente = {
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion
    };

    this.clienteService.agregarCliente(nuevoCliente);

    this.router.navigate(['/cliente']);
  }
}
