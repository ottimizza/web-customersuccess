import { NgModule } from '@angular/core';
import { ComplexSearchInputComponent } from './complex-search.component';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [ComplexSearchInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [ComplexSearchInputComponent]
})
export class ComplexSearchInputModule { }
