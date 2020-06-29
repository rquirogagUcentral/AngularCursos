import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { CoordinadorComponent } from './coordinador.component';


@NgModule({
  declarations: [CoordinadorComponent],
  imports: [
    CommonModule,
    CoordinadorRoutingModule
  ]
})
export class CoordinadorModule { }
