import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.css']
})
export class PrimeiraPaginaComponent implements OnInit {

  Velocidade: number;
  Idade: number;
  Resposta1: number;
  Resposta2: number;
  Resposta3: number;
  Resposta4: number;
  Resposta5: number;
  Resposta6: number;
  Pattern: number;

  constructor() { }

  ngOnInit() {
  }

  Calcular(){
    this.Pattern = (this.Idade/(1 / (Math.sqrt(1-Math.pow(this.Velocidade, 2)))));

    this.Resposta1 = this.Pattern - this.Pattern%1;
    this.Resposta2 = (this.Pattern%1)*12 - ((this.Pattern%1)*12)%1;
    this.Resposta3 = (((this.Pattern%1)*12)%1)*30 - ((((this.Pattern%1)*12)%1)*30)%1;
    this.Resposta4 = (((((this.Pattern%1)*12)%1)*30)%1)*24 - ((((((this.Pattern%1)*12)%1)*30)%1)*24)%1;
    this.Resposta5 = (((((((this.Pattern%1)*12)%1)*30)%1)*24)%1)*60 - ((((((((this.Pattern%1)*12)%1)*30)%1)*24)%1)*60)%1;
    this.Resposta6 = (((((((((this.Pattern%1)*12)%1)*30)%1)*24)%1)*60)%1)*60 - ((((((((((this.Pattern%1)*12)%1)*30)%1)*24)%1)*60)%1)*60)%1;
  }

}