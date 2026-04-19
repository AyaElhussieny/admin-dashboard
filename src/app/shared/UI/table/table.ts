import { Component, effect, inject, OnInit, signal, Signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { Orders } from '../../../feature/services/Orders/orders';
import { toSignal } from '@angular/core/rxjs-interop';
import { IOrderModel } from '../../../feature/models/order';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    TagModule,
    CommonModule,
    SkeletonModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  cols = [
    { field: 'name', header: 'Item Name' },
    { field: 'quantity', header: 'Qty' },
    { field: 'order_date', header: 'Order Date' },
    { field: 'amount', header: 'Amount' },
    { field: 'status', header: 'Status' },
  ];


  isLoading = signal(true);
  _orderService = inject(Orders);
  allOrders = toSignal<IOrderModel[]>(this._orderService.getAllOrder());
  orders = signal(this.allOrders()?.slice(0, 3));

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (status) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warn';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return 'info';
    }
  }
}
