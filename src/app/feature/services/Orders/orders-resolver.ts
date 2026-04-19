import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { OrderEndPoints } from '../Enums/order.endpoints';
import { IOrderModel } from '../../models/order';
import { catchError, of } from 'rxjs';
import { AlertMessageService } from '../Alert/message.service';

export const ordersResolver: ResolveFn<any> = (route, state) => {
  const _httpClient = inject(HttpClient);
  const _alertMessageService = inject(AlertMessageService);
  return _httpClient.get(OrderEndPoints.Orders).pipe(
    catchError((err) => {
      _alertMessageService.addMsg(err?.error?.msg || 'Error loading Orders Data');
      return of(undefined);
    }),
  );
};
