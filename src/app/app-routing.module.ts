import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'admin', loadChildren: () => import('./components/auth/admin/admin.module').then(m => m.AdminModule) },
  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'estudiante', loadChildren: () => import('./components/estudiante/estudiante.module').then(m => m.EstudianteModule) },
  { path: 'docente', loadChildren: () => import('./components/docente/docente.module').then(m => m.DocenteModule) },
  { path: 'coordinador', loadChildren: () => import('./components/coordinador/coordinador.module').then(m => m.CoordinadorModule) },
  { path: 'registro', loadChildren: () => import('./components/auth/registro/registro.module').then(m => m.RegistroModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
