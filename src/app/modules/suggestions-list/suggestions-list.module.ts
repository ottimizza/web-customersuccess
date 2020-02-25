import { NgModule } from '@angular/core';
import { SuggestionsListComponent } from './suggestions-list.component';
import { CommonModule } from '@angular/common';
import { ComplexSearchInputModule } from '@shared/components/search/complex-search.module';
import { SuggestionCardModule } from './suggestion-card/suggestion-card.module';

@NgModule({
  declarations: [
    SuggestionsListComponent
  ],
  imports: [
    CommonModule,
    ComplexSearchInputModule,
    SuggestionCardModule
  ]
})
export class SuggestionsListModule { }
