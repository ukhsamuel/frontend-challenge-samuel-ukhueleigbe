import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class AuthenticationRoutingModule { }
