import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  botaoDesabilitado: boolean = true;
  login: string = "";
  senha: string = "";

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    if (this.login === 'admin' && this.senha === '123') {
      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['']);
    } else {
      alert('Dados inválidos');
    }

  }

  //Método que vai ser acionado ao clicar no botão confirmar
  onBotaoClicado() {
    alert("Botão clicado");
  }

  teclaDigitada(evento: KeyboardEvent): void {
    alert("Usuário digitou " + evento.key);
  }

}