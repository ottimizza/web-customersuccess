import { Component, Input, OnInit } from '@angular/core';
import { Suggestion } from '@shared/models/Suggestion';
import { User } from '@shared/models/User';
import { StringCutterUtils } from '@shared/utils/string-cutter.util';

class FakeSuggestionCard {

  static get user() {
    return User.fromLocalStorage();
  }

}

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss']
})
export class SuggestionCardComponent implements OnInit {

  @Input() suggestion: Suggestion;
  user: User;

  ngOnInit(): void {
    this.user = FakeSuggestionCard.user;
  }

  get username() {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  get content() {
    return StringCutterUtils.cut(`${this.suggestion.problema}\n${this.suggestion.resultadoEsperado}`, 100);
  }

}
