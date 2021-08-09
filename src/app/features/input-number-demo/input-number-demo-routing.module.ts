import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputNumberDemoComponent } from './input-number-demo.component';

const routes: Routes = [{ path: '', component: InputNumberDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputNumberDemoRoutingModule { }
