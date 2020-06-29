import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinadorComponent } from './coordinador.component';

const routes: Routes = [{ path: '', component: CoordinadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
