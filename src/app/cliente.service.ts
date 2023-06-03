import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[] = [];

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  eliminarCliente(cliente: Cliente) {
    const index = this.clientes.indexOf(cliente);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }
}
