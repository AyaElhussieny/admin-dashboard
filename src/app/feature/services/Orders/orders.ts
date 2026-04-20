import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderEndPoints } from '../Enums/order.endpoints';
import { map, Observable } from 'rxjs';
import { OrderAdapter } from '../Adapters/order.adapter';
import { IOrderModel } from '../../models/order';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  _httpClient = inject(HttpClient);
  _orderAdapter = inject(OrderAdapter);

  getAllOrder(): Observable<IOrderModel[] | any> {
    return this._httpClient
      .get(OrderEndPoints.Orders)
      .pipe(map((res: any) => this._orderAdapter.Adapt(res)));
  }
}
