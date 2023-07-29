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

  constructor() {console.log(this.frases);
  }

  public atualizaResposta(): void {
    console.log('teste');

  }

}
