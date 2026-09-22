import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    itensMenu = [
      {label: 'Início', link:''},
      {label:'Clientes',link:'/clientes'},
      {label:'Sobre', link:'/sobre'}
    ]
}
