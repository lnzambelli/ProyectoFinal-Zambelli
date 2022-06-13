import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloDirective } from './directivas/titulo.directive';



@NgModule({
  declarations: [
    TituloDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
