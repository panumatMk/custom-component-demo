import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputNumberComponent
  ]
})
export class SharedModule { }
