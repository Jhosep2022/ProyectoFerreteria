import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css']
})
export class ClientePageComponent {
  constructor(private router: Router, private clienteService: ClienteService) { }

  get clientes(): Cliente[] {
    return this.clienteService.clientes;
  }

  eliminarCliente(cliente: Cliente) {
    this.clienteService.eliminarCliente(cliente);
  }

  irAAgregarCliente() {
    this.router.navigate(['/cliente-agregar']);
  }
}
