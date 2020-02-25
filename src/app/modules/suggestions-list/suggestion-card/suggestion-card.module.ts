import { NgModule } from '@angular/core';
import { SuggestionCardComponent } from './suggestion-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SuggestionCardComponent],
  imports: [CommonModule],
  exports: [SuggestionCardComponent]
})
export class SuggestionCardModule { }
