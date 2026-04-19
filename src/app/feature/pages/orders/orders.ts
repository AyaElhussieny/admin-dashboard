import { Component, computed, inject, signal } from '@angular/core';
import { Table } from '../../../shared/UI/table/table';
import { Orders } from '../../../feature/services/Orders/orders';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { IOrderModel } from '../../models/order';

@Component({
  selector: 'app-orders',
  imports: [Table],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class OrdersComponent {
  private _activatedRoute = inject(ActivatedRoute);

  // routerData = toSignal(this._activatedRoute.data);
  // ordersData = computed(() => this.routerData()?.['data']);

  isLoading = signal<boolean>(false);
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
