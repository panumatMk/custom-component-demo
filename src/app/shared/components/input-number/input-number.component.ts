import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputNumberComponent
    }
  ]
})
export class InputNumberComponent implements ControlValueAccessor {

  @Input() min = 1;
  @Input() max = 1000;
  @Input() diable = false;

  quantity = 1;

  onChange = (quantity: number) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  constructor() { }

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += 1;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      if (this.quantity === this.min - 1) return;
      this.quantity = this.min;
      this.onChange(this.quantity);
    }
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
