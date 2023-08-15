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

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase);
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

    // console.log(this.resposta);

  }

  public verificarResposta(): void {

    if( this.rodadaFrase.frasePtBr == this.resposta ) {
      alert('A tradução está correta')

          //trocar pergunta da rodada
        this.rodada++

          //atualiza o objeto rodadafrase
        console.log(this.rodada);
        this.rodadaFrase = this.frases[this.rodada]
        console.log(this.rodadaFrase);

    } else {
      alert('A tradução está errada')
    }

  }

}
