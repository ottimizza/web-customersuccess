import { Component, OnInit } from '@angular/core';
import { Suggestion, Avaliation } from '@shared/models/Suggestion';

class FakeSuggestionList {

  static get product() {
    const products = [
      'Bussola Contábil',
      'Integrador Contábil',
      'Accounts',
      'Customer Success',
      'Tareffa',
      'Comunicação',
      'Geral'
    ];
    const num = Math.round(Math.random() * 7);
    return products[num];
  }

  static get suggestions() {
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(new Suggestion(
        'Mudar o fundo do OIC para rosa choque',
        'Software está muito sério',
        'Aumento da produtividade em no mínimo 328%',
        Avaliation.POUCO,
        Avaliation.POUCO,
        Avaliation.MUITO,
        321,
        4,
        47,
        4213
      ));
    }
    return array;
  }

}

@Component({
  templateUrl: './suggestions-list.component.html',
  styleUrls: ['./suggestions-list.component.scss']
})
export class SuggestionsListComponent implements OnInit {

  product: string;
  suggestions: Suggestion[];

  ngOnInit(): void {
    this.product = FakeSuggestionList.product;
    this.suggestions = FakeSuggestionList.suggestions;
  }

}
