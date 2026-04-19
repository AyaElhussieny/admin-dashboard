import { Component, inject, signal } from '@angular/core';
import { Table } from '../../../shared/UI/table/table';
import { RouterLink } from '@angular/router';
import { Analytics } from '../../../shared/bussiness/analytics/analytics';
import { Orders } from '../../../feature/services/Orders/orders';
import { toSignal } from '@angular/core/rxjs-interop';
import { IOrderModel } from '../../models/order';

@Component({
  selector: 'app-dashboard',
  imports: [Table, RouterLink, Analytics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isLoading = signal<boolean>(true);
  _orderService = inject(Orders);
  timing = setInterval(() => {
    const data = this.allOrders();
    if (data && data?.length > 0) {
      this.isLoading.set(false);
      clearInterval(this.timing);
      return;
    }
  }, 300);

  allOrders = toSignal<IOrderModel[]>(this._orderService.getAllOrder());
}
