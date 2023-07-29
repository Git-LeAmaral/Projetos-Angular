import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = Frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string | undefined

  constructor() {console.log(this.frases);
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

    console.log(this.resposta);

  }

}
