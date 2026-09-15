import { Component } from '@angular/core';
@Component({
 selector: 'app-menu',
 standalone: true,
 imports: [],
 templateUrl: './menu.component.html'
,
 styleUrl: './menu.component.css'
})
export class MenuComponent {
itensMenu = [
 { label: 'Inicio', link: '/inicio' },
 { label: 'Clientes', link: '/clientes' },
 { label: 'Sobre', link: '/sobre' }
 ]
}
