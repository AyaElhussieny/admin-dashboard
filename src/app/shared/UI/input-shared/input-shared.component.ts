import { Component,forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-input-shared',
  imports: [
    InputTextModule ,
    FormsModule
  ],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting :forwardRef(()=> InputSharedComponent),
      multi: true
    }
  ],
  templateUrl: './input-shared.component.html',
  styleUrl: './input-shared.component.css'
})
export class InputSharedComponent implements ControlValueAccessor {

  
  placeholder = input<string>();
  labelName = input<string>();
  invalid = input<boolean>();
  dirty = input<boolean>();
  value !: string ;

  

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
