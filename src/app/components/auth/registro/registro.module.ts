import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    FormsModule,
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
