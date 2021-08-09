import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', loadChildren: () => import('./core/demo/demo.module').then(m => m.DemoModule)
  // },
  { path: '', loadChildren: () => import('./features/input-number-demo/input-number-demo.module').then(m => m.InputNumberDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }