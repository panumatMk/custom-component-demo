import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputNumberDemoRoutingModule } from './input-number-demo-routing.module';
import { InputNumberDemoComponent } from './input-number-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InputNumberDemoComponent
  ],
  imports: [
    CommonModule,
    InputNumberDemoRoutingModule,
    SharedModule
  ]
})
export class InputNumberDemoModule { }
