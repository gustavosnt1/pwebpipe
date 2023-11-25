import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem{

  constructor() { super()  }

  info(mensagem: string): void {
    console.log(mensagem,['info-snackbar']);
  }

  sucesso(mensagem: string): void {
    console.log(mensagem, ['success-snackbar']);
  }

  erro(mensagem: string): void {
    console.log(mensagem, ['error-snackbar']);
  }
}