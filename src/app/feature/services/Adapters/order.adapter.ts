import { Injectable } from '@angular/core';
import { IOrderAdapter } from '../interfaces/orderAdapter.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderAdapter implements IOrderAdapter {
  Adapt(data: any) {
    return data;
  }
}
