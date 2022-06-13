import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionPersonalRoutingModule } from './informacion-personal-routing.module';
import { InformacionPersonalComponent } from './informacion-personal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InformacionPersonalComponent
  ],
  imports: [
    CommonModule,
    InformacionPersonalRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InformacionPersonalModule { }
