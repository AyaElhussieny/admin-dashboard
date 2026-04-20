import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-shared',
  imports: [
    PasswordModule
  ],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting :forwardRef(()=> PasswordSharedComponent),
      multi: true
    }
  ],
  templateUrl: './password-shared.component.html',
  styleUrl: './password-shared.component.css'
})
export class PasswordSharedComponent implements ControlValueAccessor {
  
  placeholder = input<string>();
  labelName = input<string>();
  value !: string ;
  invalid = input<boolean>();
  dirty = input<boolean>();
  OnChange:(fn: any) => void = () =>{}
  OnTouched:(fn: any )=> void = () =>{}
  writeValue(obj: any): void {
   this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.OnChange = fn
  }
  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
}
