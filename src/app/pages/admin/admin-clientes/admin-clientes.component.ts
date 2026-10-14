import { Component, inject } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-admin-clientes',
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent {

  private service = inject(ClienteService);
  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.listaClientes = this.service.listar();
  }

  editar(id: number) {
    console.log('Editar cliente:', id);
  }

  excluir(id: number) {
    console.log('Excluir cliente:', id);
  }
}
