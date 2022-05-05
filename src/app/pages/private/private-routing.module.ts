import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class PrivateRoutingModule { }
