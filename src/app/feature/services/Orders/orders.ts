import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderEndPoints } from '../Enums/order.endpoints';
import { map } from 'rxjs';
import { OrderAdapter } from '../Adapters/order.adapter';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  _httpClient = inject(HttpClient);
  _orderAdapter = inject(OrderAdapter)

  getAllOrder() {
    return this._httpClient.get(OrderEndPoints.Orders).pipe(
      map((res:any) => this._orderAdapter.Adapt(res))
    );
  }
}
